
// CONFIGURACIÓN DE WEBPACK PARA SERVIDOR

const path = require('path');

module.exports = {
    entry: './source/server.js',  // punto de entrada de webpack
    output: {                     // donde webpack va a dejar los archivos
        path: path.resolve(__dirname, '../built/server'),   // creamos una carpeta built y por dentro server
        filename: 'index.js'
    },
    module: {
        loaders: [ // coger archivos y procesarlos de alguna forma
            {
                test: /\.json$/, // si es tipo json
                loader: 'json',  // entonces use json
            },
            {
                test: /\.jsx?$/, // si es js o jsx
                loader: 'babel-loader',  // usar babel
                exclude: /(node_modules)/, // node_modules ya funcionan con ES2015
                // así que no necesitamos utilizar babel con estos módulos
                query: {
                    presets: ['latest-minimal', 'react'] // conjunto de módulos
                    // latest-minimal: detecta version de ECMAScript y le dice a node
                    // react: nos da soporte a JSX
                }
            }
        ]
    },
    target: 'node', // nos permite utilizar los módulos nativos de node
};