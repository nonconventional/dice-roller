properties([
  // Prune the build history down to 10 previous builds
  [$class: 'jenkins.model.BuildDiscarderProperty', strategy: [$class: 'LogRotator', numToKeepStr: '10']]
])

pipeline {
  agent any

  stages {
    stage('Setup') {
      steps {
        sh 'yarn'
      }
    }

    stage('Deploy App') {
      when {
        branch 'master'
      }

      steps {
        withCredentials([usernamePassword(credentialsId: 'github', passwordVariable: 'PASSWORD', usernameVariable: 'USERNAME')]) {
          sh 'yarn deploy'
        }
      }
    }
  }

  post {
    always {
      discordSend link: BUILD_URL, successful: currentBuild.resultIsBetterOrEqualTo('SUCCESS'), title: JOB_NAME, webhookURL: 'https://discordapp.com/api/webhooks/507205009235247155/6RKBsju0DWc6th-mHxv3Pxk86I6evKM2mWPkxTShuwVLyRMUK60Zhqw5cESbGXKo0Bxp'
    }
  }
}
