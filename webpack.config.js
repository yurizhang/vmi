var path = require('path');
var BUILD_PATH = path.resolve(__dirname, './build');
var config = {
   entry:{
   	  "./assets/index": './components/index.js',
	  "./public/bundle": './components/public/app.js',
   	  "./test/test": './components/test/test.js',
	  "./test/router": './components/test/router.js',		  
	  "./dashboard/index": './components/dashboard/index.js'
	  
   },
	
   output: {
      path:BUILD_PATH,
	  publicPath:'http://localhost:8888/build/',
      filename: '[name].js',
   },
   
  resolve: {
	   alias: {
          //'Highcharts': '../../build/lib/Highcharts.js'
        },
   extensions: ['', '.js', '.jsx']
 },
   devServer: {
	   hot:true,
      inline: true,
      port: 8888
   },
	
   module: {
      loaders: [ 
		  {
			 test: /\.jsx?$/,
			 exclude: /node_modules/,
			 loader: 'babel',
				
			 query: {
				presets: ['es2015', 'react']
			 }
		  },
		  {
				test: /\.less$/,
				loader: 'style!css!less'
			},
			{ test: /\.css$/, loader: "style-loader!css-loader" },
			,{
				test: /\.(png|svg|jpg)$/,
				loader: 'url?limit=50000'
			}	  
	  ]
   },

	externals: {
		jquery: 'window.$',		
		'react': 'React',
		'react-dom': 'ReactDOM'
	}

}

module.exports = config;