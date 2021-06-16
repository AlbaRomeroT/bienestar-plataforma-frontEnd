# bienestar-plataforma-frontEnd

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

## Comandos de ejecución:

### Locales
- **npm run androidlocal.app** para Android (guardar apk en folder apps, si no existe crear dicha carpeta, en la raíz del repositorio)
- **npm run ioslocal.app** para iOS (generar .zip de la App y guardar dicho archivo en la misma carpeta apps) 

**NOTA: el servidor appium debe estar corriendo de manera local por el puerto 4723** 

### Máquina EC2: 

- **npm run androidlocal.app para Android** (guardar apk en folder apps, si no existe crear dicha carpeta, en la raíz del repositorio) 
- **npm run ioslocal.app para iOS** (generar .zip de la App y guardar dicho archivo en la misma carpeta apps) 

**NOTA: La máquina EC2 debe estar ejecutándose correctamente, esta al iniciar descarga y guarda en la ruta del docker el apk del último despliegue en el ambiente QA** 

