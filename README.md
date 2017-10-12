

# Prueba técnica

Este proyecto tiene una integración React JS / Redux JS para fines de demostración en skills en las tecnologías utilizadas.
La demostración la puedes consultar en el siguiente enlace [DEMO](http://prueba.crisostomo.soy)

![Movie list](https://www.dropbox.com/s/xepwyt21zy4gul4/movies.png?raw=1 "Movie list")

![Movie details](https://www.dropbox.com/s/hrel12tkg5jn39w/movie-details.png?raw=1 "Movie details")

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

La api es inestable, es deicr, en ocasiones responden con error. Cuando notes que no recibes información sólo actualiza la página.

## Construir y correr proyecto en producción

Con el siguiente script ejecutamos el comando webpack para construir los recursos estaticos y levantamos un servidor web con Node JS / Expres JS
```shell
$ npm run build
```

Cualquier cambio en código no será reflejado.

## Construir proyecto en producción con Docker

El script npm genera una imagen docker lista para correr en contenedor en tu servidor.

```shell
$ npm run docker-build || docker build -t darcusfenix/prueba-tecnica .
```

## Correr contenedor de imagen previa Docker

```shell
$ docker run  -i -d -p 3000:3000 darcusfenix/prueba-tecnica
```

## Testing

Ejecuta todos los archivos test que están en el proyecto. Coming soon.

```shell
npm run test
```

## Guias de estilo

Se respeta y exige las reglas de:

* eslint
* flow
* prettier
