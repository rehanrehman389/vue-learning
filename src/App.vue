<template>
  <h2>Volume Tracker (0-20)</h2>
  <h3>Current Volume - {{ volume }}</h3>
  <div>
    <button @click="volume += 2">Increase</button>
    <button @click="volume -= 2">Decrease</button>
  </div>
  <input type="text" v-model="movie">
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      volume: 0,
      movie: 'Rehan'
    }
  },
  methods: {
  },
  computed: {
  },
  watch: {
    volume(newValue, oldValue) {
      if(newValue > oldValue && newValue === 16){
        alert('high volume')
      }
    },
    movie: {
      handler(newValue){
        console.log(`Calling API with Moviename = ${newValue}`)
      },
      immediate: true,
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
