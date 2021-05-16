const path = require('path');

module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      posts: path.resolve(__dirname, 'source/_posts'),
    };

    return config;
  },
};
