<template>
<div>
  <Header></Header>
  <NavBar></NavBar>
  <router-view></router-view>
</div>
</template>
<script>
import Header from '@/views/Header';
import NavBar from '@/views/NavBar';
export default {
  components:{
    Header,NavBar
  }
}
</script>

<style lang="scss">
@import url("~@/assets/css/reset.css");
</style>
