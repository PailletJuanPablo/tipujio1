# TestTioPujio
App de Emergencias para Tio Pujio

## Como instalar las dependencias de la App
Es necesario tener instalado el entorno ionic.
Primero, hay que descargar nodeJs, posteriormente instalar IOnic (las instrucciones completas están aqui):https://ionicframework.com/getting-started/

una vez instalado ionic ejecutar los siguientes comandos dentro de la carpeta:
npm install

ionic cordova plugin add cordova-sms-plugin

ionic cordova plugin add cordova-plugin-contacts

ionic cordova plugin add cordova-plugin-background-mode

ionic cordova plugin add cordova-plugin-geolocation

ionic cordova plugin add cordova-plugin-statusbar

ionic cordova plugin add cordova-plugin-splashscreen

## Como correr la App

ionic serve --lab

## Como crear la App

ionic cordova build android --release



