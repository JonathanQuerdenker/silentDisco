module.export = {
    entry: [ __dirname + '/src/index.js'],
    output: {
        path: __dirname + 'public',
        filename: 'bundle.js'
    },
    mode:'development',
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
        hot: true
    },
    resolve:{
        extensions:['.js']
    }
};