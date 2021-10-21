<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <div id="title">DVSNIER({{ label }})</div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      label: new Date().toDateString()
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
