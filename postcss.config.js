
module.exports = {
    plugins:
      process.env.NODE_ENV === 'production'
        ? [
            'tailwindcss',
            'postcss-flexbugs-fixes',
            [
              'postcss-preset-env',
              {
                autoprefixer: {
                  flexbox: 'no-2009',
                  grid: "autoplace"
                },
                stage: 3,
                features: {
                  'custom-properties': false,
                },
              },
            ],
          ]
        : [
            
            'tailwindcss',
            'postcss-flexbugs-fixes',
          ],
        }