import path from "path";
import ExtractTextPlugin from "extract-text-webpack-plugin";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

let wp = {};

const context = path.resolve(__dirname, "./src"),
    devtool = "cheap-module-source-map",
    entry = { app: "./index.es6" },
    extensions = [".js", ".es6", ".json", ".jsx", ".scss"],
    output = {
        path: path.resolve(__dirname, "./dist"),
        filename: "./bundle.js",
        publicPath: "/"
    },
    plugins = [
        new ExtractTextPlugin({
            filename: "[name].css?v=[contenthash]",
            allChunks: true
        })
    ],
    rules = [
        {
            test: /\.(es6|jsx)$/,
            exclude: /node_modules/,
            use: "babel-loader"
        },
        {
            test: /\.(jpg|jpeg|png|gif)$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: "url-loader",
                    options: { limit: 10000 }
                }
            ]
        },
        {
            test: /\.(eot|ttf|woff|woff2|svg|otf)$/,
            use: [{ loader: "file-loader" }]
        },

        {
            test: /\.scss$|\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [
                    {
                        loader: "css-loader",
                        options: { modules: false, sourceMaps: true }
                    },
                    {
                        loader: "sass-loader",
                        options: { sourceMaps: true }
                    }
                ]
            }),
            include: /flexboxgrid/
        }
    ];

wp.context = context;
wp.entry = entry;
wp.output = output;
wp.devtool = devtool;
wp.module = {
    rules: rules
};
wp.resolve = {
    extensions: extensions
};
wp.plugins = plugins;
wp.watch = false;

console.log("Entorno: ", process.env.NODE_ENV);


if (process.env.NODE_ENV === "production") {

    plugins.push(
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production")
        })
    );

    plugins.push(
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        })
    );

    plugins.push(
        new webpack.optimize.UglifyJsPlugin({})
    );
    plugins.push(
        new HtmlWebpackPlugin({
            template: `${__dirname}/src/production.html`,
            hash: true,
            filename: "index.html",
            minify: {
                collapseWhitespace: true,
                html5: true,
                minifyCSS: true,
                removeComments: true,
                removeEmptyAttributes: true,
                inject: "body"
            }
        })
    );
    delete wp.devtool;

}

export default wp;
