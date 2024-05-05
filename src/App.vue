<template>
  <CardS></CardS>
  <CardS>Card content</CardS>
  <CardS><h2>Card content</h2></CardS>
  <CardS>
    <template v-slot:header>
      <h3>Header</h3>
    </template>
    <template v-slot:default>
      <h3>Default</h3>
    </template>
    <template v-slot:footer>      
      <h3>Footer</h3>
    </template>
  </CardS>

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
