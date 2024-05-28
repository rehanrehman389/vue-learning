<template>
  <div>
    <TempRef />
  </div>
</template>

<script>
import TempRef from './components/TempRef.vue'

export default {
  name: 'App',
  setup() {
  },
  components: {
    TempRef
  },
  data() {
    return {
      name: 'Final Name'
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
