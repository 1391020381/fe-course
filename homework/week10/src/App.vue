

<template>
  <div>
    <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949">
    </el-switch>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ElSwitch } from "./components/Switch/index";
export default defineComponent({
  name: "App",
  components: { ElSwitch },
  setup() {
    const value = ref(true);
    return { value };
  },
});
</script>
<style lang="scss" scoped>
</style>

