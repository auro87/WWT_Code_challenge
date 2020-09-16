const path = require('path');
const { HotModuleReplacementPlugin, DefinePlugin } = require('webpack');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
          test: /\.svg/,
          use: [
              {
                  loader: 'svg-url-loader',
                  options: {
                      limit: 1024
                  }
              }
          ]
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    publicPath: 'http://localhost:3000/dist/',
    hotOnly: true
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new DefinePlugin({
      BASE_URL: JSON.stringify('https://jsonplaceholder.typicode.com/'),
      ALBUM_ENDPOINT_URL: JSON.stringify('https://jsonplaceholder.typicode.com/albums'),
      ALBUM_ART_ENDPOINT_URL: JSON.stringify('https://jsonplaceholder.typicode.com/photos')
    })
  ]
};
