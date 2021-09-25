module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@root': '.',
          '@assets': './src/assets',
          '@components': './src/components',
          '@config': './src/config',
          '@locale': './src/locale',
          '@navigators': './src/navigators',
          '@screens': './src/screens',
          '@store': './src/store',
          '@utils': './src/utils',
          '@hooks': './src/hooks',
          '@hocs': './src/hocs',
        },
      },
    ],
  ],
};
