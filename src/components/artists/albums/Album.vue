<template>
<div v-if="release">
     <li>
        <img :src="release.thumb">
        {{release.title}}
     </li>
 </div>
</template>

<script>
export default {
  props:{
    release: Object
  }


};
</script>

<style>

li img {
  margin: auto 0;
  width:90%;
  max-height:340px;
  object-fit: contain;
 
 }

</style>
