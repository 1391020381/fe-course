<template>
  <div>
    <p>Space Left:{{ spaceLeft }} out of {{ capacity }}</p>
    <h2></h2>
    <ul>
      <li v-for="(name, index) in attending" :key="index">{{ name }}</li>
    </ul>
    <button @click="increaseCapacity">increase Capacity</button>
  </div>
</template>

<script>
import { reactive, computed, toRefs } from "vue";
export default {
  name: "reactiveSynatx",
  setup() {
    const event = reactive({
      capacity: 4,
      attending: ["Tim", "Bob", "Joe"],
      spaceLeft: computed(() => {
        return event.capacity - event.attending.length;
      }),
    });
    function increaseCapacity() {
      event.capacity++;
    }
    return { ...toRefs(event), increaseCapacity };
  },
};
</script>

<style>
</style>