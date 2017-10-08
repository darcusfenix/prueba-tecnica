node {

    notify("Started")
    try {
        stage ('clonando proyecto git'){
            git branch: 'master',
            credentialsId: 'github',
            url: 'https://github.com/darcusfenix/prueba-tecnica.git'
        }

        stage ("obteniendo dependencias npm"){
            sh "npm install"
        }

        stage ("aplicando prettier"){
            sh "npm run prettier"
        }

        stage ("validando flow"){
            sh "npm run flow"
        }

        stage ("validando eslint"){
            sh "npm run eslint"
        }

        stage ("corriendo pruebas unitarias"){
            sh "npm run test"
        }

        stage("Genernando imagen docker"){
            sh "npm run docker-build"
        }

        stage("corriendo imagen docker"){
            sh "npm run docker-run"
        }

        notify("Done")
    }catch(error){
        notify("Error: ${error}")
        currentBuild.result = "FAILURE"
    }


}


def notify(status){
    emailext (
      to: "juancvfenix@gmail.com",
      subject: "${status}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
      body: """<p>${status}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]':</p>
        <p>Check console output at <a href='${env.BUILD_URL}'>${env.JOB_NAME} [${env.BUILD_NUMBER}]</a></p>""",
    )
}
