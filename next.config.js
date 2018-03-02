const webpack = require("webpack")
const USE_PREFETCH = process.env.NODE_ENV === "production"
const { ANALYZE } = process.env
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

module.exports = {
  webpack: (config, { dev }) => {
    if (ANALYZE) {
      const {
        WebpackBundleSizeAnalyzerPlugin
      } = require("webpack-bundle-size-analyzer")

      config.plugins.push(new WebpackBundleSizeAnalyzerPlugin("stats.txt"))
    }
    config.plugins.push(
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/) // Ignore all optional deps of moment.js
    )
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.GRAPHQL_API_URL": JSON.stringify(
          process.env.GRAPHQL_API_URL
        ),
        "process.env.USE_PREFETCH": JSON.stringify(USE_PREFETCH)
      })
    )
    if (config.resolve.alias) {
      delete config.resolve.alias["react"]
      delete config.resolve.alias["react-dom"]
    }

    return config
  }
}
