# API Restful empleando ExpressJS 4, Mysql y MongoDB

Este servicio REST, fue construido en base a tutoriales encontrados por internet y adaptados a un patrón ya que muchos de los tutoriales trabajaban sobre un mismo archivo javascript y no llegaban a tener el "orden" que yo deseaba tener, un ejemplo: la llamada a los querys en los mismos routes de Express se tuvo que separar y ahora toda llamada a la base de datos se hacen desde el Model.

## Módulos o librerias que se utilizan en este ejemplo
1. mongoose 
2. mysql
3. body-parser
4. method-override

## Estructura de la Base de Datos Mysql

--Próximamente

## Instalación

'Requisitos'
- Tener instalado NodeJs y (de preferencia) Nodemon.
- Tener instalado MongoDB y levantar el servidor.
- Tener instalado Mysql Server y levantar el servidor.

'Levantar el Proyecto'
* Clonar el repositorio.
* Abrir la terminal y ubicarse en la carpeta del proyecto.
* Ejecutar el comando >nodemon start

## Próximas actualizaciones

1. Completar todas las funciones para Usuarios (Mysql)
2. Implementar autenticación y seguridad basada en MD5
3. Aumentar la complejidad de los servicios rest (llamadas a tablas anidadas)
