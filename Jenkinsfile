pipeline {
    agent any

    environment {
        WEBSERVER_PORT = '8080'
        APP_DIR = "$WORKSPACE"
    }

    stages {
        stage('Build') {
            steps {
                echo "Installing dependencies and building the app..."
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo "Running unit tests..."
                sh 'npm test || true'
            }
        }

        stage('Code Quality') {
            steps {
                echo "Analyzing code quality with ESLint..."
                sh 'npx eslint "**/*.jsx" || true'

            }
        }

        stage('Security') {
            steps {
                echo "Running npm audit for security analysis..."
                sh 'npm audit || true'
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying the app to a lightweight web server..."
                sh '''
                sudo cp -r build/* /var/www/html/
                sudo systemctl restart apache2
                '''
            }
        }

        stage('Release') {
            steps {
                echo "Tagging the release in Git..."
                sh '''
                git config --global user.email "praveen.kumar1195@outlook.com"
                git config --global user.name "praveen"
                git tag -a v1.0 -m "Initial release"
                git push origin v1.0 || true
                '''
            }
        }

        stage('Monitoring') {
            steps {
                echo "Monitoring the app..."
                sh 'curl -s http://localhost:$WEBSERVER_PORT || true'
            }
        }
    }

    post {
        always {
            echo "Cleaning up workspace..."
            cleanWs()
        }
    }
}
