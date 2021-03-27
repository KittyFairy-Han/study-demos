=============开发环境   当前运行的命令是:inspect   =============
{
  mode: 'development',
  context: 'E:\\前端\\plugin-page',
  devtool: 'cheap-module-eval-source-map',
  node: {
    setImmediate: false,
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  output: {
    path: 'E:\\前端\\plugin-page\\dist',
    filename: '[name].js',
    publicPath: '/',
    globalObject: '(typeof self !== \'undefined\' ? self : this)'
  },
  resolve: {
    alias: {
      '@': 'E:\\前端\\plugin-page\\src',
      vue$: 'vue/dist/vue.runtime.esm.js',
      '@less': 'E:\\前端\\plugin-page\\src\\assets\\less',
      '@bussiness': 'E:\\前端\\plugin-page\\src\\components\\bussiness',
      '@common': 'E:\\前端\\plugin-page\\src\\common'
    },
    extensions: [
      '.mjs',
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.wasm'
    ],
    modules: [
      'node_modules',
      'E:\\前端\\plugin-page\\node_modules',
      'E:\\前端\\plugin-page\\node_modules\\_@vue_cli-service@3.12.1@@vue\\cli-service\\node_modules'
    ]
  },
  resolveLoader: {
    modules: [
      'E:\\前端\\plugin-page\\node_modules\\_@vue_cli-plugin-babel@3.12.1@@vue\\cli-plugin-babel\\node_modules',
      'node_modules',
      'E:\\前端\\plugin-page\\node_modules',
      'E:\\前端\\plugin-page\\node_modules\\_@vue_cli-service@3.12.1@@vue\\cli-service\\node_modules'
    ]
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          /* config.module.rule('vue').use('cache-loader') */
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: 'E:\\前端\\plugin-page\\node_modules\\.cache\\vue-loader',
              cacheIdentifier: '3df4d10a'
            }
          },
          /* config.module.rule('vue').use('vue-loader') */
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              },
              cacheDirectory: 'E:\\前端\\plugin-page\\node_modules\\.cache\\vue-loader',
              cacheIdentifier: '3df4d10a'
            }
          }
        ]
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          /* config.module.rule('images').use('url-loader') */
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'assets/img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          /* config.module.rule('svg').use('file-loader') */
          {
            loader: 'file-loader',
            options: {
              name: 'assets/img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          /* config.module.rule('media').use('url-loader') */
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'assets/media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          /* config.module.rule('fonts').use('url-loader') */
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'assets/fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('pug') */
      {
        test: /\.pug$/,
        oneOf: [
          /* config.module.rule('pug').oneOf('pug-vue') */
          {
            resourceQuery: /vue/,
            use: [
              /* config.module.rule('pug').oneOf('pug-vue').use('pug-plain-loader') */
              {
                loader: 'pug-plain-loader'
              }
            ]
          },
          /* config.module.rule('pug').oneOf('pug-template') */
          {
            use: [
              /* config.module.rule('pug').oneOf('pug-template').use('raw') */
              {
                loader: 'raw-loader'
              },
              /* config.module.rule('pug').oneOf('pug-template').use('pug-plain') */
              {
                loader: 'pug-plain-loader'
              }
            ]
          }
        ]
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('css').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('css').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('css').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('css').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('css').oneOf('vue').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('css').oneOf('vue').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('css').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('css').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('css').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal') */
          {
            use: [
              /* config.module.rule('css').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('css').oneOf('normal').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('css').oneOf('normal').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          /* config.module.rule('postcss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('postcss').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('postcss').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('postcss').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('postcss').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('postcss').oneOf('vue').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('postcss').oneOf('vue').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('postcss').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal') */
          {
            use: [
              /* config.module.rule('postcss').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('postcss').oneOf('normal').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('postcss').oneOf('normal').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('scss') */
      {
        test: /\.scss$/,
        oneOf: [
          /* config.module.rule('scss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('scss').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    renderSync: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    info: 'dart-sass\t1.30.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.10.4\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Color: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      List: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Map: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Null: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Number: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      String: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      'toString': function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            }
                  }
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('scss').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    renderSync: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    info: 'dart-sass\t1.30.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.10.4\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Color: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      List: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Map: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Null: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Number: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      String: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      'toString': function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            }
                  }
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('scss').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    renderSync: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    info: 'dart-sass\t1.30.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.10.4\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Color: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      List: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Map: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Null: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Number: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      String: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      'toString': function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            }
                  }
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal') */
          {
            use: [
              /* config.module.rule('scss').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    renderSync: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    info: 'dart-sass\t1.30.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.10.4\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Color: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      List: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Map: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Null: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Number: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      String: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      'toString': function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            }
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('sass') */
      {
        test: /\.sass$/,
        oneOf: [
          /* config.module.rule('sass').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('sass').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    renderSync: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    info: 'dart-sass\t1.30.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.10.4\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Color: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      List: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Map: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Null: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Number: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      String: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      'toString': function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            }
                  },
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('sass').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    renderSync: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    info: 'dart-sass\t1.30.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.10.4\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Color: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      List: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Map: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Null: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Number: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      String: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      'toString': function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            }
                  },
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('sass').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    renderSync: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    info: 'dart-sass\t1.30.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.10.4\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Color: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      List: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Map: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Null: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Number: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      String: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      'toString': function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            }
                  },
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal') */
          {
            use: [
              /* config.module.rule('sass').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('sass-loader') */
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  implementation: {
                    render: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    renderSync: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            },
                    info: 'dart-sass\t1.30.0\t(Sass Compiler)\t[Dart]\ndart2js\t2.10.4\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Color: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      List: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Map: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Null: function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              },
                      Number: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      String: function() {
                                return _call(f, this, Array.prototype.slice.apply(arguments));
                              },
                      Error: function Error() { [native code] }
                    },
                    NULL: {
                      'toString': function() {
                                return _call(f, Array.prototype.slice.apply(arguments));
                              }
                    },
                    TRUE: {
                      value: true
                    },
                    FALSE: {
                      value: false
                    },
                    cli_pkg_main_0_: function() {
                              return _call(f, Array.prototype.slice.apply(arguments));
                            }
                  },
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('less').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('less').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('less').oneOf('vue').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('less').oneOf('vue').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('less').oneOf('vue').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('less').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal') */
          {
            use: [
              /* config.module.rule('less').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('less').oneOf('normal').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('less').oneOf('normal').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('less').oneOf('normal').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('stylus').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('stylus').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('stylus').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal') */
          {
            use: [
              /* config.module.rule('stylus').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'vue-style-loader',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('css-loader') */
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('postcss-loader') */
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('js') */
      {
        test: /\.m?jsx?$/,
        exclude: [
          function () { /* omitted long function */ }
        ],
        use: [
          /* config.module.rule('js').use('cache-loader') */
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: 'E:\\前端\\plugin-page\\node_modules\\.cache\\babel-loader',
              cacheIdentifier: '07e071ca'
            }
          },
          /* config.module.rule('js').use('babel-loader') */
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"development"',
          BASE_URL: '"/"'
        }
      }
    ),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(
      {
        additionalTransformers: [
          function () { /* omitted long function */ }
        ],
        additionalFormatters: [
          function () { /* omitted long function */ }
        ]
      }
    ),
    /* config.plugin('hmr') */
    new HotModuleReplacementPlugin(),
    /* config.plugin('progress') */
    new ProgressPlugin(),
    /* config.plugin('html-demo-aa') */
    new HtmlWebpackPlugin(
      {
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          'demo-aa'
        ],
        template: 'src/common/template/index.html',
        filename: 'demo-aa.html',
        title: 'demo标签aa页面'
      }
    ),
    /* config.plugin('html-demo-about') */
    new HtmlWebpackPlugin(
      {
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          'demo-about'
        ],
        template: 'src/common/template/index.html',
        filename: 'demo-about.html',
        title: 'demo标签about页面'
      }
    ),
    /* config.plugin('html-demo-bb') */
    new HtmlWebpackPlugin(
      {
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          'demo-bb'
        ],
        template: 'src/common/template/index.html',
        filename: 'demo-bb.html',
        title: 'demo标签bb页面'
      }
    ),
    /* config.plugin('html-demo-cc') */
    new HtmlWebpackPlugin(
      {
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          'demo-cc'
        ],
        template: 'src/common/template/index.html',
        filename: 'demo-cc.html',
        title: 'demo标签cc页面'
      }
    ),
    /* config.plugin('html-demo-home') */
    new HtmlWebpackPlugin(
      {
        templateParameters: function () { /* omitted long function */ },
        chunks: [
          'chunk-vendors',
          'chunk-common',
          'demo-home'
        ],
        template: 'src/common/template/index.html',
        filename: 'demo-home.html',
        title: 'demo标签home页面'
      }
    ),
    /* config.plugin('preload-demo-aa') */
    new PreloadPlugin(
      {
        rel: 'preload',
        includeHtmlNames: [
          'demo-aa.html'
        ],
        include: {
          type: 'initial',
          entries: [
            'demo-aa'
          ]
        },
        fileBlacklist: [
          /\.map$/,
          /hot-update\.js$/
        ]
      }
    ),
    /* config.plugin('prefetch-demo-aa') */
    new PreloadPlugin(
      {
        rel: 'prefetch',
        includeHtmlNames: [
          'demo-aa.html'
        ],
        include: {
          type: 'asyncChunks',
          entries: [
            'demo-aa'
          ]
        }
      }
    ),
    /* config.plugin('preload-demo-about') */
    new PreloadPlugin(
      {
        rel: 'preload',
        includeHtmlNames: [
          'demo-about.html'
        ],
        include: {
          type: 'initial',
          entries: [
            'demo-about'
          ]
        },
        fileBlacklist: [
          /\.map$/,
          /hot-update\.js$/
        ]
      }
    ),
    /* config.plugin('prefetch-demo-about') */
    new PreloadPlugin(
      {
        rel: 'prefetch',
        includeHtmlNames: [
          'demo-about.html'
        ],
        include: {
          type: 'asyncChunks',
          entries: [
            'demo-about'
          ]
        }
      }
    ),
    /* config.plugin('preload-demo-bb') */
    new PreloadPlugin(
      {
        rel: 'preload',
        includeHtmlNames: [
          'demo-bb.html'
        ],
        include: {
          type: 'initial',
          entries: [
            'demo-bb'
          ]
        },
        fileBlacklist: [
          /\.map$/,
          /hot-update\.js$/
        ]
      }
    ),
    /* config.plugin('prefetch-demo-bb') */
    new PreloadPlugin(
      {
        rel: 'prefetch',
        includeHtmlNames: [
          'demo-bb.html'
        ],
        include: {
          type: 'asyncChunks',
          entries: [
            'demo-bb'
          ]
        }
      }
    ),
    /* config.plugin('preload-demo-cc') */
    new PreloadPlugin(
      {
        rel: 'preload',
        includeHtmlNames: [
          'demo-cc.html'
        ],
        include: {
          type: 'initial',
          entries: [
            'demo-cc'
          ]
        },
        fileBlacklist: [
          /\.map$/,
          /hot-update\.js$/
        ]
      }
    ),
    /* config.plugin('prefetch-demo-cc') */
    new PreloadPlugin(
      {
        rel: 'prefetch',
        includeHtmlNames: [
          'demo-cc.html'
        ],
        include: {
          type: 'asyncChunks',
          entries: [
            'demo-cc'
          ]
        }
      }
    ),
    /* config.plugin('preload-demo-home') */
    new PreloadPlugin(
      {
        rel: 'preload',
        includeHtmlNames: [
          'demo-home.html'
        ],
        include: {
          type: 'initial',
          entries: [
            'demo-home'
          ]
        },
        fileBlacklist: [
          /\.map$/,
          /hot-update\.js$/
        ]
      }
    ),
    /* config.plugin('prefetch-demo-home') */
    new PreloadPlugin(
      {
        rel: 'prefetch',
        includeHtmlNames: [
          'demo-home.html'
        ],
        include: {
          type: 'asyncChunks',
          entries: [
            'demo-home'
          ]
        }
      }
    ),
    /* config.plugin('copy') */
    new CopyWebpackPlugin(
      [
        {
          from: 'E:\\前端\\plugin-page\\public',
          to: 'E:\\前端\\plugin-page\\dist',
          toType: 'dir',
          ignore: [
            '.DS_Store',
            {
              glob: '..\\src\\common\\template\\index.html',
              matchBase: false
            },
            {
              glob: '..\\src\\common\\template\\index.html',
              matchBase: false
            },
            {
              glob: '..\\src\\common\\template\\index.html',
              matchBase: false
            },
            {
              glob: '..\\src\\common\\template\\index.html',
              matchBase: false
            },
            {
              glob: '..\\src\\common\\template\\index.html',
              matchBase: false
            }
          ]
        }
      ]
    ),
    {
      definitions: {
        'process.env.USE_TEST': undefined
      }
    }
  ],
  entry: {
    'demo-aa': [
      'E:\\前端\\plugin-page\\src\\pages\\demo\\aa\\main.js'
    ],
    'demo-about': [
      'E:\\前端\\plugin-page\\src\\pages\\demo\\about\\main.js'
    ],
    'demo-bb': [
      'E:\\前端\\plugin-page\\src\\pages\\demo\\bb\\main.js'
    ],
    'demo-cc': [
      'E:\\前端\\plugin-page\\src\\pages\\demo\\cc\\main.js'
    ],
    'demo-home': [
      'E:\\前端\\plugin-page\\src\\pages\\demo\\home\\main.js'
    ]
  }
}
