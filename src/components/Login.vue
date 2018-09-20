<template>
    <div class="login">
        <h3>Sign In</h3>
        <input type="text" placeholder="Email" v-model="email"><br>
        <input type="password" placeholder="password" v-model="password"><br>
        <md-button class="md-raised" v-on:click="login">Connection</md-button>
        <p>You don't have an account ? <router-link to="sign-up">You can create one</router-link></p>
    </div>
</template>

<script>
import Vue from 'vue'
import { MdButton } from 'vue-material/dist/components'
import UserService from '../services/UserService'

Vue.use(MdButton)

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      UserService.login(this.email, this.password).then(
        (user) => {
          alert('Well done!! You are a new connected')
          this.$router.replace('helloworld')
        },
        (err) => {
          alert('Oops .' + err.message)
        }
      )
    }
  }
}
</script>

<style scoped>
    .login {
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
