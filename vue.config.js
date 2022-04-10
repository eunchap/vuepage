const { defineConfig } = require('@vue/cli-service')
/*module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  publicPath: '/vuepage',
  outputDir: './docs'
}*/

module.exports = { 
  publicPath: process.env.NODE_ENV = 'production' 
  ?  '/vuepage/' 
  : '/', 
  outputDir: './docs' 
}
