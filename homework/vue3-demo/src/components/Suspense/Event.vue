<template></template>

<script>
import { ref } from "vue";
export default {
  async setup() {
    const count = ref(null);
    function getEventCount() {
      return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
          console.log("error......", Math.random());
          reject("get Event Error.");
        } else {
          setTimeout(() => resolve(3), 1000);
        }
      });
    }
    try {
      count.value = await getEventCount();
    } catch (e) {
      throw e;
    }
  },
};
</script>

<style>
</style>