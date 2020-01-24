module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false
      }
    ],
    "@babel/preset-react"
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "react-native": "react-native-web",
          "styled-components/native": "styled-components"
        }
      }
    ],
    [
      "babel-plugin-styled-components",
      {
        ssr: true,
        displayName: false
      }
    ]
  ]
}
