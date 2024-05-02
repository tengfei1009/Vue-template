// module.exports 是 Node.js 中用于导出模块的对象。在一个 JavaScript 文件中，
// 你可以使用 module.exports 将某个对象、函数或值导出，以便其他文件可以通过 require 函数引入并使用该导出的内容。
// 当你在一个文件中使用 module.exports = ...语法时，你可以将任何需要导出的内容赋值给 module.exports。
// 这可以是一个对象、一个函数、一个类，或者任何其他的 JavaScript 值。
module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        'Android 4.1',
        'iOS 7.1',
        'Chrome > 31',
        'ff > 31',
        'ie >= 8'
      ]
    },
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
