/**
 * @file Webpack configuration file
 * @author Mike Joyce [hello@mikejoyce.io]
 */

/**
 * Webpack
 * @type {Object}
 * @see {@link https://webpack.js.org/}
 */
const webpack = require('webpack');

/**
 * Path
 * @type {Object}
 * @see {@link https://nodejs.org/api/path.html#path_path}
 */
const path = require('path');

/**
 * Clean Webpack
 * @type {Object}
 * @see {@link @see {@link https://www.npmjs.com/package/clean-webpack-plugin}}
 */
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/**
 * Plugins
 * @type {Object}
 */
const plugins = {

  /**
   * Extract Text
   * @type {[Object}
   * @see {@link https://www.npmjs.com/package/extract-text-webpack-plugin}
   */
  ExtractText: require('extract-text-webpack-plugin'),

  /**
   * Uglify JS
   * @type {Object}
   * @see {@link https://www.npmjs.com/package/uglifyjs-webpack-plugin}
   */
  UglifyJs: require('uglifyjs-webpack-plugin'),

  /**
   * Optimize CSS
   * @type {Object}
   * @see {@link https://www.npmjs.com/package/optimize-css-assets-webpack-plugin}
   */
  OptimizeCSS: require('optimize-css-assets-webpack-plugin'),

  /**
   * Imagemin
   * @type {Object}
   * @see {@link https://www.npmjs.com/package/imagemin-webpack-plugin}
   */
  ImageMin: require('imagemin-webpack-plugin').default,

  /**
   * Autoprefixer
   * @type {Object}
   * @see {@link https://www.npmjs.com/package/autoprefixer}
   */
  Autoprefixer: require('autoprefixer'),

  /**
   * Favicons
   * @type {Object}
   @see {@link https://www.npmjs.com/package/favicons-webpack-plugin}
   */
  Favicons: require('favicons-webpack-plugin'),

  /**
   * Copy
   * @type {Object}
   @see {@link https://www.npmjs.com/package/copy-webpack-plugin}
   */
  Copy: require('copy-webpack-plugin')

};

/**
 * Config
 * @type {Object}
 */
const config = {
  src: path.join(__dirname, '/src'),
  dist: path.join(__dirname, '/dist')
};

module.exports = {
  entry: [
    `${config.src}/js/index.js`
  ],
  output: {
    path: `${config.dist}`,
    filename: 'js/app.js',
  },
  resolve: {
    extensions: ['.js'],
    modules: [path.resolve(__dirname, `${config.src}/js/modules`), 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              useRelativePath: true,
              publicPath: '../fonts',
              outputPath: 'fonts/'
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          useRelativePath: true,
          publicPath: '../images'
        }
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [ '@babel/preset-env' ]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: plugins.ExtractText.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  plugins.Autoprefixer
                ]
              }
            },
            {
              loader: 'resolve-url-loader',
              options: {
                debug: false
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                sassOptions: {
                  includePaths: [
                    'node_modules/',
                    'node_modules/motion-ui/src',
                    'node_modules/foundation-sites/scss',
                    'src/scss'
                  ],
                }
              }
            }
          ]
        })
      }
    ]
  },
  optimization: {
    minimizer: [
      new plugins.UglifyJs({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new plugins.OptimizeCSS({}),
    ]
  },
  plugins: [
    new CleanWebpackPlugin,
    new plugins.ExtractText(
      'css/app.css'
    ),
    new plugins.Copy([
      {from: 'src/images', to:'images'}
    ]),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new plugins.ImageMin({
      test: 'images/**'
    }),
    new plugins.Favicons({
      logo: `${config.src}/favicon/favicon.png`,
      prefix: 'favicons/',
      emitStats: false,
      statsFilename: 'iconstats-[hash].json',
      persistentCache: false,
      inject: false,
      background: '#fff',
      title: 'Resume | Mike Joyce',
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: true
      }
    })
  ]
};
