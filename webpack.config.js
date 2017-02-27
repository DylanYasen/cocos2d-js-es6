var path = require('path');

module.exports = {
  entry: './src/game.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  module: {
     loaders: [
       {
         test: /\.js$/,
         loader: "babel-loader",
         exclude: /node_modules/,
       }
     ]
   },
   externals: { cc: 'cc' }
};
