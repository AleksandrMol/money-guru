const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackNotifierPlugin = require('webpack-notifier')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          'postcss-loader',
          "sass-loader"
        ],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
        ]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        template: './index.html', // Скармливаем наш HTML-темплейт
    }),
    new WebpackNotifierPlugin({ alwaysNotify: false }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: { // Тут тот же момент, что и в tsconfig.json, чтобы Webpack смог понять ссылки на директории
      "@app": path.resolve(__dirname, 'src/app'),
      "@data": path.resolve(__dirname, 'src/data'),
      "@domain": path.resolve(__dirname, 'src/domain')
    },
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Весь наш результат складываем в папку dist
  },
  devServer: {
    compress: true,
    port: 3000,
    hot: true,
    open: false,
  },
  performance: {
    hints: false,
  },

}
