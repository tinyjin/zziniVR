const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');
const meta = {
  charset: 'utf-8',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  description: 'Hello, World! - zziniVR',
};

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: dist,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hello, zziniVR!',
      filename: 'index.html',
      template: './src/index.html',
      meta,
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|gltf|bin|obj|mtl)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]'
            },
          },
        ]
      },
    ]
  },
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    contentBase: dist,
  }
};