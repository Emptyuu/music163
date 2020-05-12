<template>
  <div id="redFrameTit">
    <i></i>
    <span class="tit">{{tit}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tit:this.title
    };
  },
  props:{
      title:{
          type:String
      }
  }
};
</script>

<style lang="scss" scoped>
#redFrameTit {
  display: flex;
  align-items: center;
  height: 50px;
  .tit {
    margin-left: 8px;
  }
  i {
    left: 0;
    content: "";
    background: #d33a31;
    width: 2px;
    height: 16px;
  }
}
</style>