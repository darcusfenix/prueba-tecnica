

# Prueba técnica

Este proyecto tiene una integración React JS / Redux JS para fines de demostración en skills en las tecnologías utilizadas.
La demostración las puedes consultar en el siguiente enlace [DEMO](http://prueba.crisostomo.soy)


## Instalar / clonar proyecto


```shell
$ git clone https://github.com/darcusfenix/prueba-tecnica.git
```

Una vez clonado el proyecto podrás acceder al directorio prueba-tecnica.

## Continuar con desarrollo


```shell
$ npm install && npm run start
```

La primer parte descarga las dependencias npm y finalmente inicia el proyecto en entorno desarrollo. 
En este caso cualquier cambio de código se refleja al ser actualizado el navegador.

## Requisitos

Deberás tener instalado las siguientes versiones de librerías para ello.

* Node JS / latest
* NPM / latest
* Git / latest


## IMPORTANTE

Los servicios están restringidos para realizar peticiones externas a su aplicación propia de Claro Video.
Para ello y poder probar la aplicación debes instalar el siguiente plugin de el navegador Chrome.

https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi

## Construir proyecto en producción

Con el siguiente script ejecutamos el comando webpack para construir los recursos estaticos y levantamos un servidor web con Node JS / Expres JS
```shell
$ npm run build
```

Cualquier cambio en código no será reflejado.

## Construir proyecto en producción con Docker

El script npm genera una imagen docker lista para correr en contenedor en tu servidor.

```shell
npm run docker
```

## Testing

Ejecuta todos los archivos test que están en el proyecto.

```shell
npm run test
```

## Guias de estilo

Se respeta y exige las reglas de:

* eslint
* flow
* prettier
