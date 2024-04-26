<template>
  <h2>{{ name }}</h2>
  <div>
    <!-- <button @click="changeName">Change Name</button> -->
    <button @click="changeName($event), increment(1, $event)">Change Name</button>
  </div>

  <h2>{{ count }}</h2>
  <div>
    <button @click="increment(1, $event)">Increament 1</button>
    <button @click="decrement(1)">Decrement 1</button>
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
    changeName(event) {
      this.name = 'Batman'
      console.log('event', event)
    },
    increment(num, event) {
      this.count += num
      console.log('event', event)
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
