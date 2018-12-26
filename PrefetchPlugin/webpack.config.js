module.exports = {
	entry: './src/index.js',
	module: {
		rules: [
			{
				test: '/\.js$/',
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'stage-0']
				}
			}		
		]
	}
}