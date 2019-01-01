const NpmInstallPlugin = require('webpack-plugin-install-deps');

const default = new NpmInstallPlugin();

const dynamic = new NpmInstallPlugin({
  dev: function (module, path) {
    return [
      "babel-preset-react-hmre",
      "webpack-dev-middleware",
      "webpack-hot-middleware",
    ].indexOf(module) !== -1;
  }
})

module.exports = {
	entry: './src/index.js',
  plugins: [
    default
    // dynamic
  ]
}