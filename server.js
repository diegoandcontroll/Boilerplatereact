/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: { colors: true },
}).listen(3000, (error) => {
  if (error) {
    return console.log(error);
  }
  console.log('Listening on http://localhost:3000');
});
