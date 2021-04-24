var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/HeaderComponent.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'HeaderComponent.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
		    {
		        test: /\.css$/,
		        include: path.resolve(__dirname, 'src'),
		        exclude: /(node_modules|bower_components|build)/,
		        use:['style-loader','css-loader']
		    },
            {         test: /\.(png|jpg|gif|svg)$/,         loader: 'file-loader',         options: {           name: '[name].[ext]?[hash]'         }       }
        ]
    }
}