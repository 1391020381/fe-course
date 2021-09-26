<template>
  <div>
      <h1>Directive</h1>
      <input v-focus />
  </div>
</template>

<script>
export default {
    directives:{
        focus:{
           inserted:function(el){
               el.focus()
           } 
        }
    }
}
</script>

<style>

</style>