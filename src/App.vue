<template>
  <CardS></CardS>
  <CardS>Card content</CardS>
  <CardS><h2>Card content</h2></CardS>
</template>

<script>
import CardS from './components/CardS.vue'

export default {
  name: 'App',
  components: {
    CardS
  },
  data() {
    return {
    }
  },
  methods: {
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
