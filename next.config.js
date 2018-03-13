const withTs = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');
//const { injectBabelPlugin } = require('react-app-rewired');

module.exports = withCSS(withTs());
// function override(config, env) {
//     //if (!env.isServer) config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);

// };

//module.exports = withTs();
// ["transform-runtime", ["import", { "libraryName": "antd", "style": true }]]
