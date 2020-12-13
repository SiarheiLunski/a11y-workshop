module.exports = {
  extends: [
    'react-app',
    'react-app/jest'
  ],
  rules: {
    quotes: ['error', 'single'],
    semi: 'error',
    indent: ['error', 2]
  },
  overrides: [
    {
      files: ['server/*.js'],
      env: {
        'node': true,
      },
    }
  ]
};
