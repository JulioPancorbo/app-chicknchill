#ESTE COMANDO CREA EL AAB FIRMADO Y LISTO PARA SUBIR SI TIENES KEYSTORE

read -p 'Introduce el nombre y la pass del keystore (deberían ser el mismo) ' keystore &&
actual_date=$(date +'%m-%d-%Y')
if test -f keystore/$keystore.keystore; then
    ionic cordova build android &&
    cd platforms/android &&
    ./gradlew bundle &&
    cd .. &&
    cd .. &&
    mv platforms/android/app/build/outputs/bundle/release/app-release.aab keystore/app-release.aab &&
    jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -storepass "$keystore" -keystore keystore/$keystore.keystore keystore/app-release.aab $keystore &&
    zipalign -v 4 keystore/app-release.aab keystore/$keystore-$actual_date.aab
else
    echo "No existe el keystore"
    exit 1
fi