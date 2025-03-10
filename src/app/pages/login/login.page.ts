import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { UtilitiesService } from 'src/app/services/utilities.service';
import { MenuController, NavController, Events } from '@ionic/angular';
import { User } from 'src/app/models/User';
import { codeErrors } from "../../utils/utils";
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public isUpdating: boolean;
  public form: FormGroup;

  public usuarioFacebook: User;


  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private utilitiesService: UtilitiesService,
    private menuCtrl: MenuController,
    private navCtrl: NavController,
    private events: Events,
    private auth: AuthenticationService,
    private fb: Facebook,
    private googlePlus: GooglePlus) {

  }

  public ngOnInit(): void {
    this.menuCtrl.enable(false);

    this.form = this.formBuilder.group({
      email: ['chicknchill@admin.es', [Validators.required, Validators.email]],
      password: ['xeripassword', Validators.required]
    });
  }

  public submitForm(): void {
    this.utilitiesService.showLoading("Entrando...");

    this.apiService.login(this.form.value).subscribe((user: User) => {

      this.utilitiesService.dismissLoading();
      console.log(user);

      //Ahora aplicamos la cabecera devuelta a las siguientes peticiones
      this.apiService.setTokenToHeaders(user.api_token);

      //Emitimos el evento de login
      this.events.publish('user:login');

      //Vamos a inicio
      this.auth.login(user.api_token);

    }, (error) => {
      this.utilitiesService.dismissLoading();
      this.utilitiesService.showToast(codeErrors(error));
    });
  }


  // LOGIN CON REDES SOCIALES (FACEBOOK Y GOOGLE)

  /**
   * ========================REGISTRO CON FACEBOOK===================================
   * 
   * 1. Registrar la nueva app en : https://developers.facebook.com/apps/
   * 2. Añadir el Login/Registro con Facebook, para Android y/o iOS : 
   *    - Seguir los diferentes pasos para la creación de de los hash (debug and release) (PARA ANDROID)
   *    ---- EJEMPLO GENERACIÓN DEL HASH : keytool -exportcert -alias ALIAS_O_ALIAS_DEBUG -keystore "RUTA_DEBUG_KEY_O_RELEASE_KEY" | "RUTA_OPENSSL" sha1 -binary | "RUTA_OPENSSL" base64
   * 
   * 3. Recoger el identificador de la aplicación (en facebook developers, dentro de la app, en la zona superior izquierda)
   * 4. AÑADIR EL PLUGIN : ionic cordova plugin add cordova-plugin-facebook4 --variable APP_ID="NUESTRA_VARIABLE" --variable APP_NAME="NOMBRE_APP" --variable FACEBOOK_HYBRID_APP_EVENTS="false" --variable FACEBOOK_ANDROID_SDK_VERSION="8.2.0"
   * 5. Dentro del developers : Revisión de la aplicación > Permisos y funciones
   *      - Dar permiso a public_profile
   *      - Dar permiso a email
   *      - Realizar la comprobación de uso de datos (tendremos una alerta en naranja).
   *    * 
   * ===================================================================================
   */
  public async loginFacebook(): Promise<void> {

    this.fb.login(['public_profile', 'email']).then((response: FacebookLoginResponse) => {
      this.utilitiesService.showLoading();
      if (response.status === "connected") {
        console.log('Logueo Correcto');
        this.getUserDetail(response.authResponse.userID);
      } else {
        console.log('No logueado');
      }
    }).catch((error) => console.log('Error al loguear en facebook', error));
  }


  public getUserDetail(userId): void {
    this.fb.api('/' + userId + '/?fields=id,email,name,picture,gender', ['public_profile'])
      .then((detail) => {
        console.log("User detail: ", detail);
        this.usuarioFacebook = detail;
        this.apiService.loginFacebook(this.usuarioFacebook).subscribe((user: User) => {
          this.utilitiesService.dismissLoading();
          console.log(user);

          //Ahora aplicamos la cabecera devuelta a las siguientes peticiones
          this.apiService.setTokenToHeaders(user.api_token);

          //Emitimos el evento de login
          this.events.publish('user:login');

          //Vamos a inicio
          this.auth.login(user.api_token);

          this.utilitiesService.dismissLoading();
        }).catch((error) => {
          console.log('Error al coger usuario Facebook ', error);
        });
      }
      )
  };

  /**
   * ===============================REGISTRO CON GOOGLE============================
   * 1. Crear y/o consutar proyecto en Firebase
   * 2. Añadir la app para android y/o iOS y seguir los diferentes pasos
   * 3. Añadir hasta 3 Huellas digitales del certificado SHA (SHA-1) (debug, release y google play console)
   *    - a) keytool -list -v -keystore PATH_DEBUG_KEYSTORE -alias androiddebugkey
   *    - b) keytool -list -v -keystore PATH_KEYSTORE -alias ALIAS_NAME
   *    - c) "Integridad de la aplicación" dentro de la App de Google Play Console
   * 4. Añadir google a la app: Authentication --> Sign-in method --> Habilitar Google
   * 5. Descargar el archivo google-services.json y GoogleService-Info.plist (Y reemplazarlos o añadirlos)
   * 6. Añadir el plugin con las variables del web client id
   *  - ionic cordova plugin add cordova-plugin-googleplus --variable WEB_APPLICATION_CLIENT_ID="WEB_CLIENT_ID_FIREBASE_APP" --variable PLAY_SERVICES_VERSION=15.0.1
   *  - Introducir en el codigo siguiente también el Web client Id
   * ===============================================================================
   */
  public async loginGoogle() {
    try {
      const gplusUser = await this.googlePlus.login({
        'webClientId': 'WEB CLIENT ID COGIDO DESDE FIREBASE',
        // EJEMPLO : 785790182231-8vm1d1ouqlp5v8u5v95dltr9eql0954u.apps.googleusercontent.com
        'offline': true,
        'scopes': 'profile email'
      });
      
      console.log(gplusUser);
      let user: User = {
        name: gplusUser.displayName,
        email: gplusUser.email,
        avatar: gplusUser.imageUrl,
        givenName: gplusUser.givenName
      }
      this.utilitiesService.showLoading("Entrando");
      this.apiService.loginGoogle(user).subscribe((user: User) => {
        this.utilitiesService.dismissLoading();

        //Ahora aplicamos la cabecera devuelta a las siguientes peticiones
        this.apiService.setTokenToHeaders(user.api_token);

        //Emitimos el evento de login
        this.events.publish('user:login');

        //Vamos a inicio
        this.auth.login(user.api_token);

      }, error => {
        this.utilitiesService.dismissLoading();
        this.utilitiesService.showToast("No se ha podido entrar con Google2");
        console.log(error);
      });

    } catch (err) {
      console.log('Catch native Google', err);
      this.utilitiesService.showToast("No se ha podido entrar con Google1");
    }
  }

}
