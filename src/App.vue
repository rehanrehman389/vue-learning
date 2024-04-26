<template>
  <h2> Function {{ add(1,2,3) }}</h2>
  <h2> Function {{ add(8,6,7) }}</h2>
  <h2> Multiply {{ multiply(baseValue) }}</h2>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      baseMuiltiplier: 5,
      baseValue: 5
    }
  },
  methods: {
    add(a, b, c) {
      return a + b + c
    },
    multiply(num) {
      return num * this.baseMuiltiplier
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
