const path = require('path');

module.exports = {
  entry: './src/index.js', // Archivo principal
  output: {
    path: path.resolve(__dirname, 'dist'), // Carpeta donde se genera el bundle
    filename: 'bundle.js', // Archivo resultante
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Archivos que terminan en .js o .jsx
        exclude: /node_modules/, // Excluye la carpeta node_modules
        use: {
          loader: 'babel-loader', // Utiliza babel-loader
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Soporta archivos .js y .jsx
  },
};
