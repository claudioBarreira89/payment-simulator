const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = env => {
  const productionEnv = env && env.production;
  return {
    entry: "./src/index.jsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      publicPath: productionEnv ? "./" : "/",
      filename: "bundle.js"
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "index.html"),
        hash: true,
        filename: "./index.html"
      })
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: { presets: ["@babel/env"] }
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    devServer: {
      contentBase: path.join(__dirname),
      port: 3000,
      publicPath: "http://localhost:3000/"
    }
  };
};
