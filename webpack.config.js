
const path = require('path');
module.exports = {

    mode: 'development',

  // devServer: {

        //static: './dist',

   // },
    devtool: 'inline-source-map',

    entry: './src/index.ts',
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/,
          include: [path.resolve(__dirname, 'src')]
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      publicPath: 'public',
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'public'),
    },

 };