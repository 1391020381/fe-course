<template>
  <div>Capacity :{{ capacity }}</div>
  <p>Spases Left:{{ spacesLeft }} out of {{ capacity }}</p>
  <button @click="increaseCapacity()">Increase Capacity</button>
</template>

<script>
import { ref, computed, watch } from "vue";

export default {
  name: "computed",
  components: {},
  setup(props, context) {
    const capacity = ref(3);
    const attending = ref(["Tim", "Bob", "Joe"]);
    function increaseCapacity() {
      console.log("increaseCapacity");
      capacity.value++;
    }
    const spacesLeft = computed(() => {
      console.log("spacesLeft");
      return capacity.value - attending.value.length;
    });
    return { capacity, increaseCapacity, attending, spacesLeft };
  },
};
</script>

<style>
</style>