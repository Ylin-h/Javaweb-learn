<template>
  <div id="app">
    <nav>
      <router-link to="/">WelcomeHome</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
   <ElementView></ElementView><!--显示element组件-->

  </div>

</template>
<script>
import ElementView from './views/element/ElementView.vue'//导入element组件
export default {
  name: 'App',
  components: {
    ElementView
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
