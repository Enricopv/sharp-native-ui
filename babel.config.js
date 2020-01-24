module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false
      }
    ],
    "@babel/preset-react"
    // "module:metro-react-native-babel-preset"
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "react-native": "react-native-web"
          // "styled-components/native": "styled-components"
        }
      }
    ],
    ["babel-plugin-styled-components"]
  ]
}
