<template>
  <button @click="handleClick">{{ label }}</button>
</template>

<script>
/**
 * `MyButton` component.
 * @vue-prop {String} label - The label of the button.
 * @vue-prop {Function} [onClick] - Optional click handler.
 * @vue-data {Boolean} pressed - Indicates if the button was pressed.
 * @vue-computed {String} status - Gets the status of the button.
 * @vue-emits {Event} click - Emits when the button is clicked.
 * @vue-slot default - Slot for button content.
 */
export default {
  name: 'MyButton',
  props: {
    label: {
      type: String,
      required: true
    },
    onClick: Function
  },
  data() {
    return {
      pressed: false
    };
  },
  computed: {
    status() {
      return this.pressed ? 'Pressed' : 'Not Pressed';
    }
  },
  methods: {
    handleClick() {
      this.pressed = !this.pressed;
      if (this.onClick) {
        this.onClick();
      }
      this.$emit('click', event);
    }
  }
}
</script>
