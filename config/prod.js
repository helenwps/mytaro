const path = require('path')

module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {
    BASE_URL:"https%3A%2F%2Fminiapp-gray02.qdama.cn"
  },
  mini: {
    webpackChain(chain) {
      chain.plugin('analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])

      chain.merge({
        optimization: {
          usedExports: true,
        },
        module: {
          rules: [
            {
              include: path.resolve('node_modules', 'taro-ui-vue3'),
              sideEffects: false
            }
          ]
        }
      })
    }
  },
  h5: {
    webpackChain(chain) {
      chain.plugin('analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
      chain.resolve.alias
        .set('@tarojs/components$', '@tarojs/components/dist-h5/vue3/index.js')
      chain.merge({
        optimization: {
          usedExports: true,
        },
        module: {
          rules: [
            {
              include: path.resolve('node_modules', 'taro-ui-vue3'),
              sideEffects: false
            }
          ]
        }
      })
  }
}
