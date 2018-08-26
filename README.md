# MERN STACK
this is a CRUD app example write with React, Node, Expres and Mongodb


Carpetas

app  ( todo el codigo de la aplicacion generado en React)

models ( todo lo que este referido a el acceso a la base)

public ( aca se va poner todo el codigo generado y que sea publico para nuestros usuarios, ya estandarizado para que el navegador lo pueda interpretar)

routes ( rutas, como vendria a ser el controlador)


1) npm init --yes ( esto inicializa el proyecto como node.js )
2) npm install express (http://expressjs.com/es/ )

Para ejecutar la aplicación hacemos:
node src/index.js

npm install nodemon -D ( el -D es porque es una dependencia de desarrollo, pero no del código en si)

NODEMON se usa para que cada vez que hagamos un cambio, automaticamente ya lo tome, sin tener que andar reiniciando el servicio una y otra vez, para probar las cosas.

En el package.json se pueden definir en la sección scrips distintos comandos útiles, como por ejemplo el start ( osea que hace al iniciar la aplicación), luego de definir el start, podemos simplemente ejecutar npm start, y la aplicación iniciará.
Para otros comandos, como el dev, se debe utilizar npm run dev 

npm install morgan ( es un modulo para ver por consola las peticiones que están llegando al servidor)


npm install mongose ( este modulo permite conectar a la base de datos y tambien permite definir como se van a ver los datos dentro de la base de datos)

Instale mongodb, para iniciar el servicio
brew services start mongodb ( esto es en mac)


FRONTEND

npm install webpack -D ( esto es lo que va a hacer interpretar el código read a código que entienda el navegador. )

npm install webpack-cli -D ( esto es algo que webpack también usa, para que funcione, en versiones anteriores vernia todo junto, ahora son 2 paquetes)


npm install react react-dom 

npm install babel-core babel-loader ( babel es para que interprete los jsx, osea java-script +  HTML, por si solo webpack no interpreta más que javascript puro)   

npm install babel-preset-react babel-preset-env ( el primero es para que interprete react y el segundo para que interprete todo el javascript moderno) , babel es como nodemoun pero para el frontend, cada cambio que se hace, para que se impacte automaticamente. En el package.json para el script webpack, se agrega la flag --watch, para que controle si hay cambios, en el caso que exista un cambio lo procese.

Materialize framework css (https://materializecss.com/)
