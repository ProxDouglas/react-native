module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          extensions: [".tsx", ".ts", ".js", ".json"],
        },
      ],
      //   [
      //     "module:react-native-dotenv",
      //     {
      //       envName: "APP_ENV",
      //       moduleName: "@env",
      //       path: ".env",
      //     },
      //   ],
      //   ["react-native-paper/babel"],
      //   [
      //     "module-resolver",
      //     {
      //       alias: {
      //         src: "./src",
      //       },
      //     },
      //   ],
      //   [require. Resolve("expo-router/babel")],
      // [
      //   "react-native-reanimated/plugin",
      //   {
      //     relativeSourceLocation: true,
      //   },
      // ],
    ],
  };
};
