pipeline {

    agent { label 'LocalHost'}

    stages {
        stage('Clone the project') {
            steps {
                git branch:'master', url:'https://github.com/victor-fpereira/Ebac_Cypress.git'
            }
        }
        stage('Execute tests') {
            steps {
               sh 'NO_COLOR=1 npx cypress run'
            }
        }
    }
}
