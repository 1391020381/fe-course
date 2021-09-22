<template>LifecycleHooks</template>

<script>
import { onBeforeMount, onMounted } from "vue";
export default {
  name: "LifecycleHooks",
  setup() {
    onBeforeMount(() => {
      console.log("Before Mount");
    });
    onMounted(() => {
      console.log("onMounted");
    });
  },
};
</script>

<style>
</style>