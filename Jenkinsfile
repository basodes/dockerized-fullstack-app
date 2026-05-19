pipeline {
    agent any

    stages {

        stage('Verify Pipeline') {
            steps {
                echo 'Jenkins pipeline started successfully'
            }
        }

        stage('Show Docker Version') {
            steps {
                bat 'docker --version'
            }
        }

        stage('Show Docker Containers') {
            steps {
                bat 'docker ps'
            }
        }

    }
}