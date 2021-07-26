<template>
  <div class="menu">
    <a href="/#/to64"
      ><div class="item">进制转换，将 10 进制浮点数转换成 64 进制</div></a
    >
    <a href="/#/fileApi"><div class="item">file-Api使用</div></a>
    <a href="/#/monaco-editor"><div class="item">monaco-editor使用</div></a>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style lang="less" scoped>
.menu {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  .item {
    border: 1px #e0e0e0 solid;
    background: #f0f0f0;
    width: 200px;
    height: 100px;
    margin: 10px;
    border-radius: 6px;
  }
}
</style>
