module.exports = {
  plugins: [
    "node_modules/jsdoc-vuejs",
    "plugins/markdown"
  ],
  tags: {
    "allowUnknownTags": true,
    "dictionaries": ["jsdoc"]
  },
  recurseDepth: 10,
  source: {
    include: ["./src"],
    includePattern: ".(js|jsx|vue)$",
    excludePattern: "(node_modules|./docs)"
  },
  templates: {
    cleverLinks: false,
    monospaceLinks: true,
    useLongnameInNav: false,
    showInheritedInNav: true
  },
  opts: {
    destination: "./docs/",
    encoding: "utf8",
    private: true,
    recurse: true,
    template: "./node_modules/minami"
  }
};
