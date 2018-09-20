<template>
    <div class="sing-up">
        <h3>Let's create a new account !</h3>
        <input type="text" placeholder="Email" v-model="email"><br>
        <input type="password" placeholder="password" v-model="password"><br>
        <md-button class="md-raised" v-on:click="signUp">Sign up</md-button>
        <p>or go back to <router-link to="/login">login.</router-link></p>
    </div>
</template>

<script>
import UserService from '../services/UserService'

export default {
  name: 'SignUp',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp () {
      UserService.signUp(this.email, this.password).then(
        (user) => {
          alert('Your account has been created !')
          this.$router.replace('helloworld')
        },
        (err) => {
          alert('Oops. ' + err.message)
        }
      )
    }
  }
}
</script>

<style scoped>
    .sing-up {
        margin-top: 40px;
    }
    input {
        margin: 10px 0;
        width: 20%;
        padding: 15px;
    }
    button {
        margin-top: 20px;
        width: 10%;
        cursor: pointer;
    }
    p {
        margin-top: 40px;
        font-size: 13px;
    }
    p a {
        text-decoration: underline;
        cursor: pointer;
    }
</style>
