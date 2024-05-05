<template>
  <h4>App component Text</h4>
  <ChildStyles><h4>Child Style comepnents text</h4></ChildStyles>
</template>

<script>
import ChildStyles from './components/ChildStyles.vue'
export default {
  name: 'App',
  components: {
    ChildStyles
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h4 {
  color: orange;
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
