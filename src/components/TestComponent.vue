<template>
    <div>
        <p>{{msg}}</p>
        <div class="menu">
            <ul>
                <li v-for="item in menuLinks" :key="item.id">
                    <router-link :to="item.routerLink">
                        <md-button class="md-raised">{{item.name}}</md-button>
                    </router-link>
                </li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import Vue from 'vue'
import { MdButton } from 'vue-material/dist/components'

Vue.use(MdButton)

export default {
  name: 'TestComponent',
  data () {
    return {
      msg: '라우터 테스트 난 Parent',
      menuLinks: [
        {id: 0, name: 'child1', routerLink: '/test/child1'},
        {id: 1, name: 'child2', routerLink: '/test/child2'}
      ]
    }
  }
}
</script>

<style scoped>
    p {
        font-size: 20px;
        font-weight: 600;
    }

    ul{
        padding:0;
    }

    li {
        display: inline-block;
        margin-right: 10px;
    }
</style>
