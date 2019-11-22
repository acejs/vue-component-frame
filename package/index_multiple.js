import Test from './test'

// 存储组件列表
const components = [Test]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = Vue => {
  // 判断是否安装
  if (install.installed) return false
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}

// 判断是否直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 供Vue.use()方法使用
  install,
  Test
}
