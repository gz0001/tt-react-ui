const path = require('path')
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin')
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loaders: [
      { loader: require.resolve('awesome-typescript-loader') },
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: { parser: 'typescript' }
      }
    ],
    enforce: 'pre'
  })

  const cssRule = config.module.rules.find(r => r.test.toString() === /\.css$/.toString())
  const postCssUse = cssRule.use.find(u => u.loader && u.loader.indexOf('postcss-loader') > -1)
  delete postCssUse.options

  config.plugins.push(new TSDocgenPlugin())
  config.resolve.extensions.push('.ts', '.tsx')

  config.resolve.plugins = [new TsConfigPathsPlugin()]

  return config
}
