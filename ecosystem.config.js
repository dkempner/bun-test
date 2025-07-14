module.exports = {
  apps: [
    {
      name: "app",
      script: "index.js",
      interpreter: "bun",
      exec_mode: "cluster",
      instances: 2,
    },
  ],
};
