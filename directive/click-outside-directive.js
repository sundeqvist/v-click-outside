const logWarning = (binding, componentName) => {
  let warning = '[v-click-outside]: The v-click-outside handler can only be provided with a function. ';
  if (typeof binding.value === 'object') {
    warning += `In component ${componentName} the provided object has a handler of type ${typeof binding.value.handler}.`;
  } else {
    warning += `In component ${componentName} the provided expression ${binding.expression} is of type ${typeof binding.value}.`;
  }
  console.warn(warning);
};

let handler;
const clickOutside = {
  bind(el, binding, vnode) {
    const boundExpression = binding.value.handler || binding.value;
    if (typeof boundExpression !== 'function') {
      logWarning();
    }

    handler = (e) => {
      const { exclude = [] } = binding.value;
      const isExcludedElement = exclude.some(className => e.target.classList.contains(className));
      const isOutsideClick = el !== e.target && !el.contains(e.target);
      if (isOutsideClick && !isExcludedElement) {
        boundExpression();
      }
    };
    el.handler = handler;
    document.addEventListener('click',  el.handler);
  },
  unbind(el) {
    document.removeEventListener('click', el.handler);
  },
};

export default clickOutside;