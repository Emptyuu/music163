<template>
  <div id="header">
    <div class="logo">
      <i class="fa fa-music"></i>
      <span>网易云音乐</span>
    </div>
    <div class="download" @click="download">下载APP</div>
  </div>
</template>

<script>
export default {
    methods:{
        download(){
            window.open('https://github.com/Emptyuu/music163');
        }
    }
};
</script>

<style scoped lang="scss">
#header {
//   width: 100%;
  height: 84px;
  background: #d43c33;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  .logo {
    color: white;
    font-size: 21px;
    span {
      margin-left: 8px;
    }
  }
  .download {
    width: 100px;
    height: 36px;
    text-align: center;
    background: white;
    font: 16px/36px "";
    color: #d43c33;
    border-radius: 25px;
  }
}
</style>