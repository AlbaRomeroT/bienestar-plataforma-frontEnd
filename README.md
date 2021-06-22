# Bienestar-plataforma-frontEnd

Proyecto de pruebas automatizadas(FrontEnd) para Bienestar

Este proyecto cuenta con los Frameworks [Webdriverio v6.1.24](https://webdriver.io/) , [Appium v1.20](https://appium.io/), [Cucumber v6.0.5](https://cucumber.io/), [Chai v4.2.0](https://www.chaijs.com/)

## Comandos de instalación:

Para repositorio de pruebas instalar dependencias: 
```bash
npm install
```
Instalación de Appium:
```bash
npm install –g appium —chromedriver-skip-install
```
Instalar Android Studio y/o Xcode para ejecución sobre emuladores 

Instalación de yarn:
```bash
npm install yarn –g 
```
Instalación de curl:
```bash
brew install curl
```

## Comandos de ejecución:

### Locales
- **npm run androidlocal.app** para Android (guardar apk en folder apps, si no existe crear dicha carpeta, en la raíz del repositorio)
- **npm run ioslocal.app** para iOS (generar .zip de la App y guardar dicho archivo en la misma carpeta apps) 

**NOTA: el servidor appium debe estar corriendo de manera local por el puerto 4723** 

### Máquina EC2: 

- **npm run androidlocal.app para Android** (guardar apk en folder apps, si no existe crear dicha carpeta, en la raíz del repositorio) 
- **npm run ioslocal.app para iOS** (generar .zip de la App y guardar dicho archivo en la misma carpeta apps) 

**NOTA: La máquina EC2 debe estar ejecutándose correctamente, esta al iniciar descarga y guarda en la ruta del docker el apk del último despliegue en el ambiente QA** 

## Archivos de configuración: 
- **Configuración global** para Cucumber, Allure y conexión con Appium: wdio.shared.conf.js 
  - En este archivo se configura la conexión a la IP del servidor Appium de manera remota en la EC2 (IP: http://54.237.140.118:4723) 
  - Se definen las funciones Hooks necesarias para la correcta ejecución de las pruebas 
- **Para la configuración de las capabilities para emuladores Android**: wdio.android.app.conf.js 
  - Configurar el nombre del dispositivo, la versión del SO y el nombre del AVD y tener el parámetro autoWebview en true y definir la ruta dónde se debe encontrar el apk para su instalación 
- **Para la configuración de las capabilities para emuladores iOS**: wdio.ios.app.conf.js 
  -Configurar el nombre del dispositivo, la versión del SO y tener el parámetro safariLogAllCommunication en true y definir la ruta dónde se debe encontrar el .zip de la App para su instalación 
- **Repositorio**: Rama principal configurada para ejecución en el pipeline: testing 
- **Reportes**: Se utiliza el framework Allure para reportar los resultados de las pruebas ejecutadas en base a los datos generados y almacenados en la carpeta test-report 
  - Se deben ejecutar los siguientes comandos: 
    - npm run report:generate para generación de los archivos bases 
    - npm run report:open abre en una pestaña del explorador los resultados para ser consultados 
- **Cucumber**: Manejo de features por Épica para cada flujo automatizado y manejo de tags para ejecución seleccionada de cada flujo 
En Android para ejecuciones locales se debe configurar el emulador con el AVD Manager 

- **Comando de subida de apk**:

curl -u 'elkinidarraga_2c4N8T:WsfyFPvqps9YC4Ax2SVT' -X POST 'https://api-cloud.browserstack.com/app-automate/upload' -F 'file=@/Users/dreamcode/Downloads/bolivar-conmigo-V185.apk' > uidApk.json  
