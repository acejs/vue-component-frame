import Test from './Test'

Test.install = function(Vue) {
  Vue.component(Test.name, Test)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(Test.name, Test)
}

export default Test
