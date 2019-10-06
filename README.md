# click-outside-directive

Vue directive that reacts to clicks outside the bound element, and calls the expression that is passed in when this event is detected.

The directive is built to be light and simple with the most regular use case in focus which is why it only takes two parameters: an expression to call and an array of classes to exclude from the listener.

## Installation

```bash
$ npm install --save click-outside-directive
```

```bash
$ yarn add click-outside-directive
```

## Usage
You can either register the directive globally in your project:
```js
// main.js
import clickOutside from 'click-outside-directive';

Vue.use(clickOutside);
```

or import it into the Vue component you want to use the directive in:
```js
// my-cool-component.vue
import clickOutside from 'click-outside-directive';

export default {
  name: 'my-cool-component',
  directives: {
    clickOutside: clickOutside.directive,
  },
};
```

In both cases the usage is the same, simply bind it to the element you need to watch for outside clicks on, and pass in an expression of your choice:

```js
<script>
  export default {
    name: 'my-cool-component',
    data: () => ({
      showModal: true,
    }),
    methods: {
      toggleModal() {
        this.showModal = !this.showModal;
      },
    },
  };
</script>
```

```html
<template>
  <div class="my-cool-component">
    <div class="content" />
    <div
      v-if="showModal"
      v-click-outside="toggleModal"
      class="modal"
    />
  </div>
</template>
```

If you need to exclude certain elements from the listener and make them not count as outside clicks, you can pass in an object instead:

```html
<div
  v-if="showModal"
  class="modal"
  v-click-outside="{
    handler: toggleModal,
    excluded: ['class-a', 'class-b']
  }"
/>
```

## License

[MIT License](https://github.com/sundeqvist/v-click-outside/blob/master/LICENSE)