module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier", "boundaries"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:boundaries/recommended",
  ],
  settings: {
    "boundaries/elements": [
      {
        type: "hooks",
        pattern: ["*/hooks/**"],
        capture: ["parents", "category", "family", "elementName"],
      },
      {
        type: "helpers",
        pattern: ["*/helpers/**"],
        capture: ["parents", "category", "family", "elementName"],
      },
      {
        type: "components",
        pattern: ["*/components/!(helpers|hooks)"],
        capture: ["parents", "category", "family", "elementName"],
      },
      {
        type: "features",
        pattern: "features/*",
        capture: ["parents", "category", "family", "elementName"],
      },
    ],
    "boundaries/include": ["src/**/*.*"],
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 99,
        parser: "flow",
      },
    ],
    "no-undef": "error",
    "no-unused-vars": 0,
    "boundaries/element-types": [
      2,
      {
        default: "disallow",
        rules: [
          {
            from: "components",
            allow: [
              ["components", { parents: "${parents}" }],
              ["components", { parents: "${category}" }],
              ["helpers", { parents: "${parents}" }],
              ["helpers", { parents: "${category}" }],
              ["hooks", { parents: "${parents}" }],
              ["hooks", { parents: "${category}" }],
              ["features", { parents: "${parents}" }],
            ],
            disallow: [["components", { family: "components" }]],
          },
          {
            from: "features",
            allow: [
              ["components", { parents: "${parents}" }],
              ["helpers", { parents: "${parents}" }],
              ["hooks", { parents: "${parents}" }],
              "features",
            ],
            disallow: [
              ["components", { family: "components" }],
              ["helpers", { family: "helpers" }],
              ["hooks", { family: "hooks" }],
            ],
          },
        ],
      },
    ],
  },
};
