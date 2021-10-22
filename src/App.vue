<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <div id="title">DVSNIER({{ label }})</div>
    <button @click="onclick">{{ dvs_name }}</button>
    <router-view />
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  name: 'App',
  data() {
    return {
      label: new Date().toDateString(),
      dvs_name: 'clicked'
    }
  },
  components: {
    [Toast.name]: Toast
  },
  methods: {
    onclick() {
      Toast('提示内容')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#title {
  color: crimson;
  font-size: x-large;
}
</style>
