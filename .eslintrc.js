module.exports = {
  parser: 'babel-eslint', // uses babel-eslint transforms
  settings: {
    react: {
      version: 'detect', // detect react version
    },
  },
  env: {
    node: true, // defines things like process.env when generating through node
    browser: true,
  },
  extends: [
    'eslint:recommended', // use recommended configs
    'plugin:react/recommended',
    'airbnb',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    semi: ['error', 'never'],
  },
}
