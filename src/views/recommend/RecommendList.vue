<template>
  <div></div>
</template>

<script>
import {getRecommendList} from '@/api';
export default {
    mounted(){
        getRecommendList().then(res=>{
            console.log(res)
        })
    }

}
</script>

<style>

</style>