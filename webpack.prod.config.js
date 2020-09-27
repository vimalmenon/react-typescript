const path = require("path");
const webpack  = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    watch: false,
    mode: "production",
    entry: {
        main : path.resolve(__dirname, "./scripts/index.tsx"),
    },
    output: {
        path : path.resolve(__dirname, './public'),
        filename: "[name].js"
    },
    devtool: "source-map",
     module: {
        rules: [
            {
                test: /\.ts(x?)|json$/,
                enforce: 'pre',
                use: [
                  {
                    options: {
                      eslintPath: require.resolve('eslint'),
            
                    },
                    loader: require.resolve('eslint-loader'),
                  },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg|jpe?g|png|gif|svg|jpg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    { 
                        loader: 'babel-loader'
                    },
                    {
                        loader: "ts-loader",
                    }
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]  
    },
    plugins: [
        new MiniCssExtractPlugin({            
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new HtmlWebpackPlugin({
            title: "Application Title",
            hash: false,
            filename : './index.html',
            template: './index.html',
            inject: true,
        }),
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom'
        }),
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            protectWebpackAssets: false,
            cleanOnceBeforeBuildPatterns: ['public']
        })
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", "jsx", ".scss", ".json"],
        modules: ["scripts", "node_modules"],
        alias : {
            "utility" : path.resolve(__dirname, "./scripts/utility"),
            "const" : path.resolve(__dirname, "./scripts/const"),
            "models" : path.resolve(__dirname, "./scripts/models"),
            "@types": path.resolve(__dirname, "./scripts/types/")
        },
    }
};
