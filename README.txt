	📁  ESTRUCTURA DE ARCHIVOS 📁 

    - Existen diversas formas:

 🍓  File-Type First (FTF):

    - Se organiza por tipo de archivo

 🍓  Feature First (Pods):

    - Separa por características de la aplicación

 🍓  Apps of Apps

    - Para apps más grandes 
    - Una carpeta para toda la app e internamente más carpetas por
      cada app y cada una a su vez con carpetas con features



	💻  RENDER BÁSICO EN SERVER ▶️ 

    Necesario para crear nuestro proyecto

 🍌  PRIMERO: Instalaciones

    - Iniciar el proyecto, para ello:
      Escribir en CONSOLA$ npm init --yes
      
      Nota: Ya se debe tener instalado npm 
 
    - Instalar REACT y REACT DOM, para ello:
      Escribir en CONSOLA$ npm i -S react react-dom

      Nota: Estas son las librerías para usar y renderizar react

 🍌  SEGUNDO: Codear el servidor

    - Crear una carpeta llamada 'source' 
      Dentro del proyecto creado anteriormente con npm

    - Crear un archivo dentro de source llamado 'server.js'
      Aquí se crea el HTML que se va a enviar al navegador	

    - Se hacen las importaciones en el archivo server.js

    - Se crea la función requestHandler() 
      Esta función se encarga de las peticiones HTTP

    - Se inicializa el servidor y que escuche el puerto (3000)

    - Ejecutar en NODE, para ello:
      Escribir en CONSOLA$ node source/server.js

      Nota: Esto no va a funcionar ya que node no soporta los imports
            Ya que esto es propio de ECMAScript 2015 y nodejs aun no lo utiliza

 🍌  TERCERO: Configuración WebPack (Module Bundler)

    - MODULE BUNDLE: Herramientas para leer código JS escrito en módulos
                     y empaquetarlo en un único archivo para que se ejecute
                     en un navegador o servidor :D

    - EXISTEN ALGUNOS  MODULE BUNDLES COMO: Require.js, Browserify, Webpack

    - CONFIGURACIÓN:

 		    - Ir al sitio oficial: http://webpack.github.io/
		    - Escribimos en la consola: npm i -D webpack para instalarlo
		    - Creamos una carpeta en el proyecto llamada 'webpack'
		    - Creamos un archivo dentro de esa carpeta 'webpack.server.config.js'
		    - Creamos otro archivo llamado 'webpack.config.js'
		    - Escribir en consola: npm i -D babel-core babel-loader 
		      babel-preset-latest-minimal babel-preset-react json-loader
		    - Correr el webpack, escribir en consola: webpack
		    - Iniciar servidor, escribir en consola: node built/server/index.js
 		    
    - IR AL NAVEGADOR:

		    - Escribir: localhost:3000

 🍌  CUARTO: Manejo de rutas en el servidor con React Router



	📲  CONSUMO DE API 📲  

 🍊  PRIMERO: Creación del cliente para consumir el API
 🍊  SEGUNDO: Iniciar la app en el navegador y configurar Webpack para producción
 🍊  TERCERO: Iniciar un servidor de estáticos con zeit/list
 🍊  CUARTO: Herramientas de desarrollo de React
 🍊  QUINTO: Consumir API y mostrar datos en el home



	👩🏻 PERFIL DE USUARIOS 👱🏻
