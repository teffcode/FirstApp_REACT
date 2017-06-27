const server = require('./webpack.server.config.js');
const client = require('./webpack.client.config.js');

// para que soporte un array con server
// puede ser un archivo o un array de configuración

module.exports = [
    server,
    client,
];

// ir a la consola y correr la siguiente instalación
// npm i -D babel-core babel-core babel-loader babel-preset-latest-minimal babel-preset-react json-loader

// EN CONSOLA:
// ./node_modules/.bin/webpack --config webpack/webpack.config.js
// 'node built/server/index.js' 

// IR AL NAVEGADOR -> localhost:3000