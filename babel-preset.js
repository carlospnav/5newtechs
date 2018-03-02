// This is a workaround for next jsx plugin clashing with StyledComponents
// More info at https://github.com/zeit/next.js/issues/2384

const preset = require("next/babel")()

preset.plugins = removeStyledJsx(preset.plugins)

module.exports = preset

function removeStyledJsx(plugins) {
  return plugins.filter(plugin => plugin.indexOf("jsx") === -1)
}
