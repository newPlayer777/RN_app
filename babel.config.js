module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    //配置解析别名
    plugins: [
      '@babel/plugin-proposal-export-namespace-from',
      [
        'module-resolver',
        {
          extensions: [
            '.android.ts',
            '.ios.ts',
            '.android.tsx',
            '.ios.tsx',
            '.tsx',
            '.ts',
            '.android.js',
            '.ios.js',
            '.android.jsx',
            '.ios.jsx',
            '.jsx',
            '.js',
            '.json',
          ],
          alias: {
            '@': './src',
            '@util': './src/util',
            '@comp': './src/component',
          }
        }
      ]

    ]
  };
};

