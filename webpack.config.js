const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development', 
    devtool: 'inline-source-map', 
    output: {
        clean: true, 

    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false, 
                    minimize: false, 
                } 
            }, 
            {
                test: /\.css$/i,
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader' ]
            }, 
            {
                test: /styles.css$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
            },
            {
                test: /\.(png|svg|jpe?g|gif|webp)$/, 
                use: [
                    {
                        loader: 'file-loader', 
                        options: {
                            esModule: false,
                            name: 'assets/[name].[ext]',
                        }
                    }
                ]
            }
        ]
    }, 
    optimization: {

    }, 
    plugins: [
        new HtmlWebpackPlugin ({
            title: 'Mi Webpack App', 
            filename: 'index.html', 
            template: './src/index.html', 
            inject: 'body'
        }), 
        new MiniCssExtractPlugin ({
            filename: '[name].css', 
            ignoreOrder: false 
        }),

        new CopyPlugin({
            patterns: [
              { from: "src/assets/", to: "assets/" }
            ],
          }),
    ] 
}

