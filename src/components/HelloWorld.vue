<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 v-if="userId">Your ID is : {{userId}}</h2>
    <md-button class="md-raised" v-on:click="logout">logout</md-button>
    <md-button class="md-raised" v-on:click="saveData">save!!!</md-button>
    <TeestComponet></TeestComponet>
  </div>
</template>
<script>
import TeestComponet from './TestComponent'
import Vue from 'vue'
import { MdButton } from 'vue-material/dist/components'
import firebase from 'firebase'

Vue.use(MdButton)

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      userId: ''
    }
  },
  components: {
    TeestComponet
  },
  created () {

  },
  methods: {
    logout () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    },
    saveData () {
      // let userId = firebase.auth().currentUser.uid
      // console.log(firebase.database().ref('/todo/' + userId).once('value').then((res) => { console.log(res) }))
      firebase.database().ref('todo/' + '22222').set({
        do: '노올자~',
        name: '권영지',
        timestamp: 'ㄹㄴㅇㄹㄴㅇㄹ',
        title: 'ㄴㅇㄹㄴㄹㄴㅇㄹ'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
