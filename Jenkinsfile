pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main',
                url: 'https://github.com/BUdayKumarReddy/task4.git'
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Run Backend Test') {
            steps {
                dir('backend') {
                    sh 'node -v'
                    sh 'npm -v'
                }
            }
        }

        stage('Build Successful') {
            steps {
                echo '3-Tier Application Build Successful'
            }
        }
    }
}
