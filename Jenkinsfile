pipeline {
    agent any
    tools {
        nodejs 'node' 
    }
    stages {
 
        stage('Preparation') { // for display purposes
        steps {
            git branch: 'develop', url: 'https://github.com/AlbaRomeroT/bienestar-plataforma-frontEnd.git'
        }
 
    }
    stage('Build') {
             steps {
                 sh 'npm --version'
                 sh 'rm -rf node_modules'
                 sh 'npm install appium'
                 sh 'npm install yarn '
                 sh 'npm install'
                 echo BRANCH_NAME
            }
            
        }
        stage('test') {
             steps {
                  sh 'npm run android.appBS --verbose'
             }
            
        }
    }
}