<template>
  <div>
    <Recommend tit="推荐音乐"></Recommend>
    <RecommendList></RecommendList>
  </div>
</template>

<script>
import Recommend from "./Recommend";
import RecommendList from "./RecommendList";
// import NewMusic from './NewMusic';
export default {
  components: {
    Recommend,RecommendList
  }
};
</script>

<style>
</style>