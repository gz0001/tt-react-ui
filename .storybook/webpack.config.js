const path = require("path");
const TSDocgenPlugin = require("react-docgen-typescript-webpack-plugin");
const TsConfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("awesome-typescript-loader")
  });

  const cssRule = defaultConfig.module.rules.find(
    r => r.test.toString() === /\.css$/.toString()
  );
  const postCssUse = cssRule.use.find(
    u => u.loader && u.loader.indexOf("postcss-loader") > -1
  );
  delete postCssUse.options;

  defaultConfig.plugins.push(new TSDocgenPlugin());
  defaultConfig.resolve.extensions.push(".ts", ".tsx");

  defaultConfig.resolve.plugins = [new TsConfigPathsPlugin()];

  return defaultConfig;
};
