<template>
  <div>
    Search for <input v-model="searchInput" />
    <div>
      <p>Loading: {{ loading }}</p>
      <p>Error:{{ error }}</p>
      <p>Number of events: {{ results }}</p>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import usePromise from "./usePromise";
export default {
  setup() {
    const searchInput = ref("");
    function getEventCount() {
      return new Promise((resolve) => {
        setTimeout(() => resolve(3), 1000);
      });
    }
    const getEvent = usePromise((searchInput) => getEventCount());
    watch(searchInput, () => {
      if (searchInput.value !== "") {
        getEvent.createPromise(searchInput);
      } else {
        getEvent.results.value = null;
      }
    });
    return { searchInput, ...getEvent };
  },
};
</script>

<style>
</style>