module.exports = {
    entry: [ __dirname + '/src/index.js'],
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    // mode:process.env.NODE_ENV !== 'production' ?  'development': 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                // query: {
                //     presets: ['@babel/preset-react', '@babel/preset-env']
                // }
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: 'public',
        hot: true,
        port: 2222
    },
    resolve:{
        extensions:['.js']
    }
};