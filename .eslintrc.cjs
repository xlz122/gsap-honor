module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    '@typescript-eslint/no-explicit-any': 0,

    // 禁止使用var
    'no-var': [2],
    // 禁止未使用的变量
    '@typescript-eslint/no-unused-vars': [2],
    // 字符串单引号
    'quotes': [2, 'single'],
    // 对象末尾逗号
    'comma-dangle': [2, 'never'],
    // 箭头函数前后空格
    'arrow-spacing': [2, { before: true, after: true }],
    // 箭头函数参数括号(1个参数不需要, 1个以上需要)
    'arrow-parens': [2, 'as-needed'],
    // 全等(===、!==)
    'eqeqeq': [2],
    // 语句结尾分号
    'semi': [2, 'always'],
    // 空格缩进
    'indent': [2, 2],
    // 文件末尾换行
    'eol-last': [2],

    // 检查effect依赖
    'react-hooks/exhaustive-deps': [0]
  }
};