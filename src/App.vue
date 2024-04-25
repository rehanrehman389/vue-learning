<template>
  <h2 v-if="num === 0">This is Number zero</h2>
  <h2 v-else-if="num < 0">This is -ve Number</h2>
  <h2 v-else-if="num > 0">This is +ve Number</h2>
  <h2 v-else>This  is not  Number</h2>
  <template v-if="display">
    <h2>Rehan</h2>
    <h2>Midhat</h2>
    <h2>Saqlain</h2>
  </template>

  <h2 v-show="show">Using V show</h2>
  <h2 v-if="show">Using V IF</h2>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      num: "Hi",
      display: true,
      show: false
    }
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
  margin-top: 60px;
}

.underline {
  text-decoration: underline;
}

.promoted {
  font-style: italic;
}

.new {
  color: green;
}

.sold-out {
  color: red;
}
</style>
