import directive from './click-outside-directive'

const plugin = {
  install(Vue) {
    Vue.directive('click-outside', directive)
  },
  directive,
};

export default plugin