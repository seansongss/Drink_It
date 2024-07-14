module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // react-native-dotenv
      [
        'module:react-native-dotenv',
        {
          "envName": "APP_ENV",
          "moduleName": "@env",
          "path": ".env.local",
          "blocklist": null,
          "allowlist": null,
          "blacklist": null,
          "whitelist": null,
          "safe": false,
          "allowUndefined": true,
          "verbose": false
        },
      ],
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            "@components": "./components",
            "@pages": "./pages",
            "@assets": "./assets",
            "^realm(.*)$": "./node_modules/realm/lib/browser$1",
          }
        }
      ]
    ]
  };
};
