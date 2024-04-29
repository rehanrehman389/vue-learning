<template>
  <GreetText name="Rehan" heroname="Rehu" />
  <GreetText name="Midhat" heroname="MID" />
  <GreetText :name="name" :heroname="heroname" />
</template>

<script>
import GreetText from './components/GreetText.vue'

export default {
  name: 'App',
  components: {
    GreetText
  },
  data() {
    return {
      name: 'Saqlain',
      heroname: 'Shaikh'
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
