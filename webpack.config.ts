import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
  mode: 'development',
  entry: './src/app/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      app: path.resolve(__dirname, './src/app'),
    }
  },
  output: {
    filename: '[contenthash].bundle.js',
    path: path.resolve(__dirname, './public'),
    clean: true,
  },
  cache: true,
  module: {
    rules: [
      { test: /\.tsx$/, use: 'esbuild-loader' },
      { test: /\.pcss$/, use: [
        'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'postcss-nested'
                ]
              }
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/app/index.html'),
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, './public'),
    },
    historyApiFallback: true,
    compress: true,
    port: 8080,
    hot: true,
  },
}
