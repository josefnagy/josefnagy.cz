const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "peace",
        mongodb_password: "HilpWifT9mI3SMBA",
        mongodb_clustername: "cluster0",
        mongodb_database: "josefnagy-DEV",
      },
    };
  }
  return {
    env: {
      mongodb_username: "peace",
      mongodb_password: "HilpWifT9mI3SMBA",
      mongodb_clustername: "cluster0",
      mongodb_database: "josefnagy",
    },
  };
};