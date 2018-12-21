<template>
   <section>
        <form @submit.prevent="onSubmit(profile)">
            <h4>SIGN INTO YOUR EXISTING ACCOUNT
                </h4>
            <label>
                USERNAME:
                <input v-model="profile.username" v-focus required>
            </label>
            <label>
                PASSWORD:
                <input :type="showPassword ? 'text' : 'password'" v-model="profile.password" required>
            </label>
            <label>
                <button type="button" @click="showPassword = !showPassword">
                    {{showPassword ? 'Hide' : 'Show'}}
                </button>
            </label>
            <label>
                <button>{{prompt}}</button>
            </label>
        </form>
    </section>
</template>

<script>
export default {
  props: {
    onSubmit: Function,
    prompt: String
  },
  data() {
    return {
      profile: {
        username: '',
        password: ''
      },
      showPassword: false
    };
  }
};
</script>

<style scoped>
p {
    margin: 0 auto;
    margin-bottom: 19px;
    width: 330px;
    padding:10px;
    background-color: #74b5e0;
    color:white;
    font-weight:600;
    }
form {
    padding:10px;
    margin: 0 auto;
    align-content: center;
    width:330px;
    background-color:  #74b5e0;
    color:white;
    font-weight:600;
    }
h3 {
    text-align: center;
    }  
input {
   display: block;
   padding: 10px;
   width:300px;
   background-color: #e8eeef;
   color: black;
   box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
   margin: 5px 0 10px 0;
   font-size: 15px;
   text-align: left;
  }
input:focus {
    background-color: #f7ffe0;
    border-radius: 5px;
    outline:none;
  }
pre{color:rgb(201, 94, 94);}
</style>