module.exports = {
  // publicPath: '/ppr-testwork/',
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = "Киновтопку";
        return args;
      })
  }
}