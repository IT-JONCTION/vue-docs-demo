<template>
  <div :style="computedStyle">
    <slot></slot>
  </div>
</template>

<script>
/**
 * `MyStack` is a flexible container component that allows easy styling of child elements.
 * 
 * @component
 * @vue-prop {Number} [spacing=2] - Specifies the spacing between child elements. Multiplier of 0.25rem.
 * @vue-prop {Boolean} [wrap=false] - Determines whether child items should wrap to the next line/column.
 * @vue-prop {String} [direction="row"] - Direction of the child elements, can be either "row" or "column".
 */
export default {
  name: 'MyStack',
  props: {
    spacing: {
      type: Number,
      default: 2
    },
    wrap: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: "row",
      validator: (value) => ["row", "column"].includes(value)
    }
  },
  computed: {
    /**
     * Computes the style for the container based on the props provided.
     * @returns {Object} - The computed style object.
     */
    computedStyle() {
      return {
        display: "flex",
        gap: `${this.spacing * 0.25}rem`,
        flexWrap: this.wrap ? "wrap" : "nowrap",
        flexDirection: this.direction
      };
    }
  }
}
</script>

<style scoped>
/* You can add styling here if needed */
</style>
