const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const generateProvider = function (options) {
  return new webpack.ProvidePlugin(options)
};

const jqueryProvider = generateProvider({
  $: 'jquery',
  jQuery: 'jquery'
});

const windowJqueryProvider = generateProvider({
  'window.jQuery': 'jquery'
});

const lodashMapProvider = generateProvider({
  _map: ['lodash', 'map']
});

const vueProvider = generateProvider({
  Vue: ['vue/dist/vue.esm.js', 'default']
});

module.exports = {
	entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
        filename:'index.html',
        template:'./src/index.html'
    }),
    jqueryProvider,
    windowJqueryProvider,
    lodashMapProvider,
    vueProvider
  ]
}