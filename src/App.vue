<template>
  <h2>{{ name }}</h2>
  <div>
    <button v-on:mouseover="name = 'Batman'">Change Name</button>
  </div>

  <h2>{{ count }}</h2>
  <div>
    <button v-on:click="increment(1)">Increament 1</button>
    <button v-on:click="decrement(1)">Decrement 1</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      name: 'Rehan',
      count: 0
    }
  },
  methods: {
    increment(num) {
      this.count += num
    },
    decrement(num) {
      this.count -= num
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
