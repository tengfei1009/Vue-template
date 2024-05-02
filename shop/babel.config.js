// 为了兼容性考虑
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      // 引入名为 'import' 的插件。这个插件的作用是按需引入 Vant 组件，以减小打包体积。
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true
      },
      'vant'
    ]
  ]
}
