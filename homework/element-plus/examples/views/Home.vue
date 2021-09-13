<template>
  <div clas="home">
    <Row :gutter="space">
      <Col @click="space++" style="padding-left: 50px; cursor: pointer">{{
        space
      }}</Col>
      <Col v-for="item in eleComponents" :span="6" :key="item[0]">
        <button @click="gotoComponnet(item[0])">{{ item[1] }}</button></Col
      >
    </Row>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  isRef,
  toRef,
  toRefs,
  h,
  reactive,
  watch,
  watchEffect,
  effect,
  computed,
  getCurrentInstance,
} from "vue";
import { eleComponents } from "../constants";
import { Row, Col } from "@/ele";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Home",
  data() {
    return {
      a: 1,
    };
  },
  components: { Row, Col },
  setup(props, { slots }) {
    let count = ref(0);
    console.log(count.value);
    const instance = getCurrentInstance();

    const router = useRouter();
    let origin = { space: 10 };
    let space = ref(10);
    let state = reactive(origin);
    // let space = toRef(origin, "space");
    // let { space } = toRefs(origin);
    // let space = computed(() => toRef.value);
    // let space = computed(() => s.value);

    const counter = ref(0);
    const twiceTheCounter = computed(() => counter.value * 2);
    const gotoComponnet = (name: string) => {
      let low = name.replace(/^\w/, (s0) => s0.toLowerCase());
      router.push(`/${low}`);
      state.space += 50;
      console.log(state);
      space.value += 100;
    };

    watch([() => state.space], ([newSpace], [oldSpace]) => {
      console.log(newSpace); // 新的 count 值
      console.log(oldSpace); // 新的 name 值
    });

    watchEffect(() => {
      console.log("watchEffect");
    });

    return {
      twiceTheCounter,
      instance,
      space,
      eleComponents,
      gotoComponnet,
    };
  },
});
</script>

<style lang="scss" scoped>
.el-col {
  padding: 10px;
}
</style>
