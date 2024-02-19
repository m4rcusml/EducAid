module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ts',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
          ],
          alias: {
            '@assets': './src/assets',
            '@contexts': './src/contexts',
            '@components': './src/components',
            '@routes': './src/routes',
            '@screens': './src/screens',
            '@themes': './src/themes',
          },
        },
      ],
    ],
  };
};
