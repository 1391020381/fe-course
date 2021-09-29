

<template>
<div class="infinite-list-wrapper" style="overflow:auto">
    <ul
      class="list"
      v-infinite-scroll="load"
      :infinite-scroll-delay="0"
      :infinite-scroll-disabled="disabled"
    >
      <li v-for="i in count" class="list-item">{{ i }}</li>
    </ul>
    <p v-if="loading">加载中...</p>
    <p v-if="noMore">没有更多了</p>
  </div>
</template>
<script>
 import { ref, computed, getCurrentInstance } from 'vue'
  export default {
    setup() {
      const count = ref(10)
      const loading = ref(false)
      const self = getCurrentInstance().ctx

      const noMore = computed(() => {
        // console.log(self.count == count.value)
        return self.count >= 20
      })

      const disabled = computed(() => {
        return self.loading || noMore.value
      })
      const load = () => {
        loading.value = true
        setTimeout(() => {
          count.value += 2
          loading.value = false
        }, 2000)
      }

      return {
        count,
        loading,
        noMore,
        disabled,
        load
      }
    }
  }
</script>
<style lang="scss" scoped>
.infinite-list-wrapper {
    height: 300px;
    text-align: center;
}
.infinite-list-wrapper .list {
    padding: 0;
    margin: 0;
    list-style: none;
}
.infinite-list-wrapper .list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: #fff6f6;
    color: #ff8484;
}
</style>
