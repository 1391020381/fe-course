<template>
  <div>Capacity :{{ capacity }}</div>
  <div>name:{{ name }}</div>
</template>

<script>
import { ref, watch } from "vue";
export default {
  name: "setup",
  props: {
    name: String,
  },
  setup(props, context) {
    watch(() => {
      console.log(props.name);
    });
    const { attrs, slots, parent, root, emit } = context;
    console.log("context", context);
    const capacity = ref(3);
    return { capacity };
  },
};
</script>

<style>
</style>