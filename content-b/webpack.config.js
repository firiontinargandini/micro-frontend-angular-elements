const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

module.exports = {
	plugins: [
    new WebpackManifestPlugin(),
  ],
};
