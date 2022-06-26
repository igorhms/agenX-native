module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    "android": {
      "googleServicesFile": "./google-services.json"
    },
    "ios": {
      "googleServicesFile": "./GoogleService-Info.plist"
    },
    plugins: [
      "react-native-reanimated/plugin",
      "@react-native-google-signin/google-signin",
      [
        "module-resolver",
        {
          extensions: [".tsx", ".ts", ".js", ".json"],
        },
      ],
    ],
  };
};