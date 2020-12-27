module.exports = {
  plugins: [
    'postcss-nesting',
    'postcss-flexbugs-fixes',
    'postcss-custom-media',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': true,
        },
      },
    ],
  ],
};
