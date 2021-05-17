const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const helpers = require("./helpers");

module.exports = merge(
  {},
  {
    context: helpers.resolveFromRootPath("src"),
    resolve: {
      alias: {
        api: helpers.resolveFromRootPath("src/api/"),
        contexts: helpers.resolveFromRootPath("src/contexts/"),
        core: helpers.resolveFromRootPath("src/core/"),
        layouts: helpers.resolveFromRootPath("src/layouts/"),
        models: helpers.resolveFromRootPath("src/models/"),
        pages: helpers.resolveFromRootPath("src/pages/"),
        pods: helpers.resolveFromRootPath("src/pods/"),
        scenes: helpers.resolveFromRootPath("src/scenes/"),
        services: helpers.resolveFromRootPath("src/services/"),
      },
      extensions: [".js", ".ts", ".tsx"],
    },
    entry: {
      app: ["regenerator-runtime/runtime", "./index.tsx", "./api/index.ts"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /\.(png|jpg)$/,
          type: "asset/resource",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "index.html",
      }),
    ],
  }
);
