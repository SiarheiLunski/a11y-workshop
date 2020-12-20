module.exports = {
  extends: [
    'react-app',
    'react-app/jest'
  ],
  rules: {
    quotes: [1, 'single'],
    semi: 1,
    indent: [1, 2],
    'react/jsx-wrap-multilines': [1, {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line'
    }],
    'react/jsx-first-prop-new-line': [1, 'multiline'],
    'react/jsx-max-props-per-line': [1,
      {
        'maximum': 1,
        'when': 'multiline'
      }
    ],
    'react/jsx-closing-bracket-location': [1, 'line-aligned']
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
