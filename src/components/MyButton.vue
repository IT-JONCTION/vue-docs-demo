<template>
  <button @click="handleClick" :style="computedStyle">
    {{ effectiveLabel }}
    <!-- This slot allows users to provide additional content if they want -->
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    label: {
      type: String,
      default: "My Button"
    },
    backgroundColor: {
      type: String,
      default: "red"
    },
    size: {
      type: String,
      default: "md",
      validator: (value) => ["sm", "md", "lg"].includes(value)
    },
    externalClickHandler: Function
  },
  data() {
    return {
      pressed: false
    };
  },
  computed: {
    effectiveLabel() {
      return this.label || "My Button";
    },
    effectiveBackgroundColor() {
      return this.backgroundColor || "red";
    },
    effectiveSize() {
      return this.size || "md";
    },
    computedStyle() {
      let scale = 1;
      if (this.effectiveSize === "sm") scale = 0.75;
      if (this.effectiveSize === "lg") scale = 1.5;
      return {
        backgroundColor: this.effectiveBackgroundColor,
        padding: `${scale * 0.5}rem ${scale * 1}rem`,
        border: "none"
      };
    },
    status() {
      return this.pressed ? 'Pressed' : 'Not Pressed';
    }
  },
  methods: {
    handleClick(event) {
      this.pressed = !this.pressed;
      if (this.externalClickHandler) {
        this.externalClickHandler(event);
      }
      this.$emit('click', event);
    }
  }
}
</script>

<style scoped>
/* Additional styling if needed */
</style>
