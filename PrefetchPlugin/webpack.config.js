const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	mode: 'production',
  plugins: [
    // new webpack.PrefetchPlugin('./node_modules/object-assign/index.js'),
    // new webpack.PrefetchPlugin('./node_modules/react/cjs/react.production.min.js'),
    // new webpack.PrefetchPlugin('./node_modules/react/index.js')
    // new webpack.AutomaticPrefetchPlugin()
  ]
}