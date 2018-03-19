const withTs = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');
const { exportPathMap } = require('nextjs-export-path-map')

//const { injectBabelPlugin } = require('react-app-rewired');

module.exports = {
  ...withCSS(withTs()),
  exportPathMap
}

// function override(config, env) {
//     //if (!env.isServer) config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);

// };

//module.exports = withTs();
// ["transform-runtime", ["import", { "libraryName": "antd", "style": true }]]

