<template>
  <div id ="comments">
    <h1>I am the Album Detail for Favorites</h1>
  
    <form @submit.prevent="handleSubmit">
      <h2>Comment on your album!</h2>
     <div class="comment-form">    
        <textarea type="text" v-model="comment" placeholder="Comment here"></textarea>
        <label>
          <input type="text" v-model="author" v-on="keyup: addComment | key enter" placeholder="Album name here:">
        </label>
    </div>
      <button v-on="click: addComment">Add Comment</button>
    </form>

  
  </div>
</template>


<script>
  var vue = new Vue({
      el: '#comments',
      data: {
          comments: []
      },
      methods:{
          addComment: function (){
              if(this.author && this.comment){
                  this.comments.push({author: this.author, content: this.comment})
              }else{
                  alert('Fields Empty');
              }
          },
          removeComment: function(index){
              this.comments.remove(index);
          }
      }
</script>
    
// function initAlbum() {
//   return {
//     artist: '',
//     title: '',
//     genre: ''
//   };
// }
// export default {
//   props: {
//     onAdd: initAlbum()
//   },
//   data() {
//     return {
//       album: initAlbum()
//     };
//   },
//   methods: {
//     handleSubmit() {
//       this.onAdd(this.album)
//         .then(() => {
//           this.album = initAlbum();
//         });
//     }
//   }


<style scoped>

form {
  border: 1px solid #aaa;
  padding: 10px;
}
input, button {
  margin: 0 5px;
}
input {
  width: 125px;
  font-size: 1.05em;
}

</style>
