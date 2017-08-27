module.exports = {
  entry: "./src/bootstrap.tsx",
  output: {
    filename: "./public/bundle.js",
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: "eval",
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // Handle .ts and .tsx file via ts-loader.
      { 
        test: /\.tsx?$/, 
        loader: "ts-loader" 
      },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }]
    }
    ],
  },
};
