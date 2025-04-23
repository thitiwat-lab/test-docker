pipeline {
    agent any

    tools {
        nodejs 'nodejs20.9.0'
    }
    
     environment {
        COMPOSE_FILE = 'docker-compose.yml'
        PROJECT_NAME = 'test-docker'
        PATH = "/usr/local/bin:$PATH"
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Cloning the repository...'
                git branch: 'main', url: 'https://github.com/thitiwat-lab/test-docker.git', credentialsId: "git-jenkins-v1"
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'sudo yarn install'
            }
        }

        stage('Build Application') {
            steps {
                echo 'Building the Next.js application'
                sh 'sudo yarn run build'
            }
        }
        
        // stage('Deploy Application') {
        //     steps {
        //         echo 'Deploying to the server...'
        //         // Replace with your deployment commands
        //     }
        // }

         stage('Build Docker Image') {
            steps {
                script {
                   sh 'sudo docker-compose up -d --build'
                }
            }
        }

    }
    post {
        always {
            echo 'Cleaning up workspace...'
            cleanWs()
        }
        success {
            echo 'Pipeline executed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check the logs for details.'
        }
    }
}