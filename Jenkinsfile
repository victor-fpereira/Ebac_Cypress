pipeline {

    agent { label 'LocalHost'}

    stages {
        stage('Clone the project') {
            steps {
                git branch:'master', url:'https://github.com/victor-fpereira/curso_cypress_api.git'
            }
        }
        stage('Execute tests') {
            steps {
               sh 'NO_COLOR=1 npx cypress run'
            }
        }
    }
}