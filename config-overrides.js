const { alias } = require("react-app-rewire-alias");

module.exports = function override(config, env) {
  alias({
    "@components": "src/components",
    "@constants": "src/constants",
    "@containers": "src/containers",
    "@images": "src/images",
  })(config);

  return config;
};