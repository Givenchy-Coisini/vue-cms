// eslint-disable-next-line @typescript-eslint/no-var-requires
// const path = require('path')
module.exports = {
  // 1.配置方式一：cli提供的属性
  outputDir: './build',
  devServer: {
    port: 9999,
    proxy: {
      '^/api': {
        target:
          'https://www.fastmock.site/mock/657e07000910b05b5a3e83bca7d960f4/web',
        // target: 'http://47.102.137.73:8086/smart-boiler',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  transpileDependencies: ['element-plus'],
  // 2.配置方式二：和webpack属性完全一致
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    }
    // module: {
    //   rules: [
    //     {
    //       test: /\.mjs$/,
    //       include: /node_modules/,
    //       type: 'javascript/auto'
    //     }
    //   ]
    // }
  }
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     components: '@/components'
  //   }
  // }
  // 3.配置方式三
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'))
  //     .set('componets', '@/components')
  // }
}
