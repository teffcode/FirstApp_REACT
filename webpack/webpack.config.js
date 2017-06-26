const server = require('./webpack/webpack.server.config.js');

// para que soporte un array con server
// puede ser un archivo o un array de configuración

module.exports = [
    server,
];

// ir a la consola y correr la siguiente instalación
// npm i -D babel-core babel-core babel-loader babel-preset-latest-minimal babel-preset-react json-loader
// escribir 'node built/server/index.js' en consola para correrlo