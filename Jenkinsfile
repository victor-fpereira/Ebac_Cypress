pipeline {

    agent { label 'LocalUbuntu'}

    stages {
        stage('Clona o projeto') {
            steps {
                git branch:'master', url:'https://github.com/victor-fpereira/curso_cypress_api.git'
            }
        }
        stage('Executar testes') {
            steps {
               sh 'NO_COLOR=1 npx cypress run'
            }
        }
    }
}