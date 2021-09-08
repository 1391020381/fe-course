<template>
  <div class="decorator">decorator</div>
</template>

<script>
export default {
  mounted() {
    console.log("Decorator");
    let f = this.spy(this.fn);
    f(1, 2);
  },
  methods: {
    fn(a, b) {
      console.log(a + b);
    },
    spy(fn) {
      return (...args) => {
        let _args = args.push("i");
        fn.apply(this, _args);
      };
    },
  },
};
</script>

<style></style>
