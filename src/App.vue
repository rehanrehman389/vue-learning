<template>
  <div>
    <h3>{{ name }}</h3>
    <CompC />
  </div>
</template>

<script>
import CompC from './components/CompC.vue'
import { provide } from 'vue'

export default {
  name: 'App',
  setup() {
    provide('c_username', 'NewValue By Provide')
  },
  components: {
    CompC
  },
  data() {
    return {
      name: 'Rehan'
    }
  },
  methods: {
  },
  // provide() {
  //   return {
  //     username: this.name
  //   }
  // }
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
