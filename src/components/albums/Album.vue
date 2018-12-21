<template>
 <div v-if="release">
    <li v-on:click="onSelect(release)">
      <p><img :src="release.thumb"></p>
      <p>{{release.title}}</p>
    </li>
 </div>
</template>

<script>
export default {
  props:{
    release: Object,
    onSelect: Function
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
