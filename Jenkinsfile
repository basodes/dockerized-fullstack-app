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
                sh 'docker --version'
            }
        }

        stage('Show Docker Containers') {
            steps {
                sh 'docker ps'
            }
        }

    }
}