module.exports = {
  // 根目录的配置
  root: true,
  // 运行环境配置
  env: {
    node: true
  },
  // 继承的规则配置
  extends: [
    'plugin:vue/essential', // 使用 Vue 插件的必要规则
    '@vue/standard' // 使用 Vue 官方的标准规则
  ],
  // 解析器选项配置
  parserOptions: {
    parser: '@babel/eslint-parser' // 使用 Babel 解析器
  },
  // 规则配置
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 在生产环境中警告或禁用 console
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off' // 在生产环境中警告或禁用 debugger
  }
}
