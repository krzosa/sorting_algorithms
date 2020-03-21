var path = require('path');

module.exports = {
    mode: 'none', 
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080,
        open: true,
    
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                'plugins': ['@babel/plugin-proposal-class-properties']
              }
            }
          }
        ]
      }
};