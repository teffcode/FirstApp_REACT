
// CONFIGURACIÓN DE WEBPACK PARA CLIENTE

const path = require('path');

module.exports = {
    entry: './source/client.js',  // punto de entrada de webpack
    output: {                     // donde webpack va a dejar los archivos
        path: path.resolve(__dirname, '../built/statics'),   // creamos una carpeta built y por dentro server
        filename: 'app.js'
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
                    presets: ['es2016', 'es2017', 'react'], // conjunto de módulos
                    // soporte a es2016 y es2017
                    // react: nos da soporte a JSX
                    plugins: ['transform-es2015-modules-commonjs'],
                    // soporta modulos 2015
                }
            }
        ]
    },
    target: 'node', // nos permite utilizar los módulos nativos de node
};