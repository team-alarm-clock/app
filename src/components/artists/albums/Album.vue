<template>
  <div class="grid-list">
    <li>
      {{release.title}}
      {{release.thumb}}
    </li>
  </div>
</template>

<script>
export default {
  props: {
    release: null
  }
};
</script>

<style>

</style>
