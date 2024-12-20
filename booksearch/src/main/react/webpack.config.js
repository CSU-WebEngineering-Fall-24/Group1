const path = require('path')

module.exports = {
  entry: "./App.js",
  devtool:"eval-source-map",
  cache:true,
  mode:"development",
  output: {
    path: __dirname,
    filename: '../resources/static/built/bundle.js'
  },
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: 'babel-loader',
        },
        {
            test: path.join(__dirname, '.'),
            exclude: /(node_modules)/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            }]
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
        {
            test: /\.(png|svg|jpg|gif|eot|otf|ttf|woff|woff2)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {}
                }
            ]
        }
        ]
    }
}