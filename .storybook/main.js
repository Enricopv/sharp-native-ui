const path = require("path")

// 1. import default from the plugin module
const createStyledComponentsTransformer = require("typescript-plugin-styled-components")
  .default

// 2. create a transformer;
// the factory additionally accepts an options object which described below
const styledComponentsTransformer = createStyledComponentsTransformer()

module.exports = {
  stories: ["../stories/**/*.js", "../stories/**/*.tsx"],
  addons: ["@storybook/addon-actions", "@storybook/addon-links"],
  webpackFinal: async config => {
    // config.resolve.extensions.push(".ts", ".tsx")
    return {
      ...config,
      resolve: {
        extensions: [
          ...config.resolve.extensions,
          ".ts",
          ".tsx",
          ".js",
          ".jsx",
          ".web.ts",
          ".web.tsx",
          ".web.js",
          ".web.jsx"
        ],
        alias: {
          ...config.resolve.alias,
          "react-native$": "react-native-web"
        }
      },
      module: {
        ...config.module,
        rules: [
          {
            test: /\.(js|jsx|mjs|ts|tsx)$/,
            exclude: [/node_modules/],

            loader: require.resolve("babel-loader"),
            options: {
              babelrc: false,
              plugins: [
                [
                  "module-resolver",
                  {
                    alias: {
                      "react-native": "./node_modules/react-native-web",
                      "@storybook/react-native":
                        "./node_modules/@storybook/react",
                      "~components": "./src"
                    }
                  }
                ]
              ],
              cacheDirectory: true
            }
          },

          {
            test: /\.(gif|jpe?g|png|svg)$/,
            use: {
              loader: "url-loader",
              options: { name: "[name].[ext]" }
            }
          },
          {
            test: /\.(ts|tsx)$/,
            use: [
              {
                loader: require.resolve("ts-loader"),
                options: {
                  compilerOptions: {
                    emitDeclarationOnly: false
                  },
                  getCustomTransformers: () => ({
                    before: [styledComponentsTransformer]
                  })
                }
              }
            ]
          }
        ]
      }
    }
  }
}
