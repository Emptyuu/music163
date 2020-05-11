<template>
<div id="navbar">
  <van-tabs v-model="active" title-active-color="#d43c33">
    <van-tab to="recommend" title="推荐音乐"></van-tab>
    <van-tab to="hotmusic" title="热歌榜"></van-tab>
    <van-tab to="search" title="搜索"></van-tab>
  </van-tabs>
</div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  }
};  
</script>
<style lang="scss" scoped>
#navbar{
  border-bottom: 1px solid rgb(214, 208, 208);
}
</style>