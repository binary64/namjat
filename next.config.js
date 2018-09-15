/* eslint-disable */

const withTs = require('@zeit/next-typescript')
//const withCSS = require('@zeit/next-css')
const withLess = require('@zeit/next-less')
//const { exportPathMap } = require('nextjs-export-path-map')

module.exports = {

  ...withTs(),

  // ...withLess({
  //   lessLoaderOptions: {
  //     javascriptEnabled: true,
  //   },
  // })
}

// // fix: prevents error when .less files are required by node
// if (typeof require !== 'undefined') {
//   require.extensions['.less'] = (file) => {}
// }


// {
//   ...withLess({
//     lessLoaderOptions: {
//       javascriptEnabled: true,
//     },
//   }),
//   ...withTs()
//   //exportPathMap
// }

// defaultLoaders.babel.options.plugins.push(["transform-define", "./env-config.js"])
// config.module.rules.push({
//   test: /\.+(js|jsx)$/,
//   use: defaultLoaders.babel,
//   include: [internalNodeModulesRegExp],
// })

// function override(config, env) {
//     if (!env.isServer) config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
// };

// ["transform-runtime", ["import", { "libraryName": "antd", "style": true }]]
