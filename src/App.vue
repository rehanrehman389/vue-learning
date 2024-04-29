<template>
  <!-- <GreetText name="Rehan" heroname="Rehu" />
  <GreetText name="Midhat" heroname="MID" />
  <GreetText :name="name" :heroname="heroname" /> -->
  <h2>App {{ name }}</h2>
  <CompC />
</template>

<script>
import CompC from './components/CompC.vue'

export default {
  name: 'App',
  components: {
    CompC,
  },
  data() {
    return {
      name: 'midhatshaikh26'
    }
  },
  // provide: {
  //   username: this.name
  // }
  provide() {
    return {
      username: this.name
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
