<template>
  <Setup :name="name" />
  <Computed />
  <ReactiveSynatx />
  <LifecycleHooks />
  <Watch />
</template>

<script>
import Setup from "./components/Setup.vue";
import Computed from "./components/Computed.vue";
import ReactiveSynatx from "./components/reactiveSynatx.vue";
import LifecycleHooks from "./components/LifecycleHooks.vue";
import Watch from "./components/Watch.vue";
export default {
  name: "App",
  components: {
    Setup,
    Computed,
    ReactiveSynatx,
    LifecycleHooks,
    Watch,
  },
  data() {
    return {
      name: "justdoit",
    };
  },
  mounted() {
    setTimeout(() => {
      this.name = "行云流水justdoit";
    }, 2000);
  },
};
</script>
