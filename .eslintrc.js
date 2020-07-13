/* eslint-disable no-undef */
module.exports = {
   'env': {
      'node': true,
      'es6': true
   },
   'extends': 'eslint:recommended',
   'parserOptions': {
      'ecmaVersion': 2018,
      'sourceType': 'module'
   },
   'rules': {
      'indent': [
         'error',
         3
      ],
      'linebreak-style': [
         'error',
         'windows'
      ],
      'quotes': [
         'error',
         'single'
      ],
      'semi': [
         'error',
         'never'
      ]
   }
}