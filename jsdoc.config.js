module.exports = {
  plugins: [
    "node_modules/jsdoc-vuejs"
  ],
  recurseDepth: 10,
  source: {
    include: ["src"],
    includePattern: ".*\\.(js|jsx|vue)$"
  },
  opts: {
    destination: "./docs/"
  }
};
