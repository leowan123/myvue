const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']

function resolve(dir) {
  return path.join(__dirname, dir)
}

let target
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
  target = 'https://yfy-insurance-test.manniuhealth.com'
  // target = 'http://172.16.21.153:8085'
} else {
  // target = 'http://172.31.21.168/' // test
  target = 'https://yfy-insurance-test.manniuhealth.com'
}
// const target = 'https://yfy-insurance-test.manniuhealth.com'

module.exports = {
  // 假如想在同一个域名下配置多个项目,当前项目前缀是 /health-h5
  // 基本路径，如果是生产(也就是run build) 那么生成的 index.html 文件，引入的js，css路径前缀会是 /health-h5/
  publicPath: process.env.NODE_ENV === 'production' ? '/health-h5' : '/',
  // publicPath: './',
  outputDir: 'health-h5',
  assetsDir: './static',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          hack: `true; @import "${path.join(__dirname, './src/assets/css/theme.less')}";`
        }
      }
    }
  },
  devServer: {
    port: 8080,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    disableHostCheck: true,
    hotOnly: false,
    proxy: {
      // '/knowledge-base-server/api/foodBank': {
      //   target: 'http://172.16.21.58:8080/',
      //   pathRewrite: {},
      //   changeOrigin: true, // target是域名的话，需要这个参数，
      //   secure: false // 设置支持https协议的代理
      // },
      // '/api': {
      //   target,
      //   pathRewrite: {},
      //   changeOrigin: true, // target是域名的话，需要这个参数，
      //   secure: false // 设置支持https协议的代理
      // },
      // '/auth-server': {
      //   target,
      //   pathRewrite: {},
      //   changeOrigin: true, // target是域名的话，需要这个参数，
      //   secure: false // 设置支持https协议的代理
      // },
      // '/aliyun': {
      //   // target: 'http://10.3.96.92:8082',
      //   target,
      //   pathRewrite: {
      //     // '^/api': ''
      //   },
      //   changeOrigin: true, // target是域名的话，需要这个参数，
      //   secure: false // 设置支持https协议的代理
      //   // secure: true
      // },
      // '/active-server': {
      //   target,
      //   pathRewrite: {},
      //   changeOrigin: true, // target是域名的话，需要这个参数，
      //   secure: false // 设置支持https协议的代理
      // }
      '/knowledge-base-server': {
        target,
        pathRewrite: {},
        changeOrigin: true, // target是域名的话，需要这个参数，
        secure: false // 设置支持https协议的代理
      }
    }
    // before: require('./mock/mock-server.js')
  },
  configureWebpack: {
    externals: {
      'AMap': 'AMap' // 高德地图配置
    },
    plugins: [
      // 开启gzip压缩,nginx需要同步开启
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp('\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      })
    ]
  },
  chainWebpack(config) {
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test
    const cdn = {
      js: [
        'https://webapi.amap.com/maps?v=1.4.15&key=e8e5d78f0dbba969dae8fdde9fc490b0',
        'https://gosspublic.alicdn.com/aliyun-oss-sdk-6.12.0.min.js'
      ]
    }
    config.plugin('html')
      .tap(args => {
        args[0].cdn = cdn
        return args
      })
    config
      .optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial' // only package third parties that are initially dependent
          },
          elementUI: {
            name: 'chunk-vant', // split elementUI into a single package
            priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
            test: /[\\/]node_modules[\\/]_?vant(.*)/ // in order to adapt to cnpm
          },
          vue: {
            name: 'chunk-vue', // split elementUI into a single package
            priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
            test: /[\\/]node_modules[\\/]_?vue(.*)/ // in order to adapt to cnpm
          },
          commons: {
            name: 'chunk-commons',
            test: resolve('src/components'), // can customize your rules
            minChunks: 2, //  minimum common number
            priority: 5,
            reuseExistingChunk: true
          }
        }
      })
    config.optimization.runtimeChunk('single')
  },
  lintOnSave: process.env.NODE_ENV === 'development'
}
