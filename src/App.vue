<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <div id="title">DVSNIER({{ label }})</div>
    <div class="div_click_container" @click="onclick">
      <van-button round color="#7232dd" plain type="info" size="large">{{ dvs_name }}</van-button>
    </div>
    <router-view />
  </div>
</template>

<script>
import { Toast, Button } from 'vant'

export default {
  name: 'App',
  data() {
    return {
      label: new Date().toDateString(),
      dvs_name: 'the clicked me'
    }
  },
  components: {
    [Toast.name]: Toast,
    [Button.name]: Button
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

.div_click_container {
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 15px;
}
</style>
