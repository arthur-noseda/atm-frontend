<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <AtmAccountBalance :amount="1000"/>
  </div>
</template>

<script>
import AtmAccountBalance from './components/AtmAccountBalance.vue';

export default {
  name: 'App',
  components: {
    AtmAccountBalance,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
