<template>
    <div>
        <p>{{msg}}</p>
        <div class="menu">
            <ul>
                <li v-for="item in menuLinks">
                    <router-link :to="item.routerLink">{{item.name}}</router-link>
                </li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'TestComponent',
  data () {
    return {
      msg: '라우터 테스트 난 Parent',
      menuLinks: [
        {name: 'child1', routerLink: '/test/child1'},
        {name: 'child2', routerLink: '/test/child2'}
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
