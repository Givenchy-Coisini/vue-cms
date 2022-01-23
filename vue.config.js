// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
module.exports = {
  // 1.配置方式一：cli提供的属性
  outputDir: './build',
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
