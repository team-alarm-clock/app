<template>
    <div class="signin" v-if="method === 'signin'">
        <h3>SIGN IN</h3>
        <p>NEED TO REGISTER?
            <button @click="method = 'signup'">SIGN UP</button>
        </p>
        <form @submit.prevent="handleSignInSubmit(profile)">
            <h4>SIGN INTO YOUR EXISTING ACCOUNT
                </h4>
            <label>
                USERNAME:
                <input v-model="profile.username" v-focus required>
            </label>
            <label>
                PASSWORD:
                <input type="password" v-model="profile.password" required>
            </label>
            <label>
                <button>SIGN IN</button>
            </label>
        </form>
    </div>
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

<style>

</style>
