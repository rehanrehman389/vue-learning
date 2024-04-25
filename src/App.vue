<template>
  <template v-for="name in names" :key="name">
    <h2 v-if="name === 'Midhat'"> {{ name }} </h2>
  </template>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      names: ['Midhat', 'Ayesha', 'Rehan'], //array
      fullNames: [
        {first: 'Midhat', last: 'Shaikh'},
        {first: 'Saqlain', last: 'Shaikh'},
        {first: 'Rehan', last: 'Ansari'}
      ], //array of obj
      actors: [
        {
          name: 'Charles',
          movies: ['Batman', 'The Prestige'],
        },
        {
          name: 'Di Caprio',
          movies: ['Titanic', 'Inception']
        }
      ],//array of array
      myinfo: {
        name: 'Midhat',
        profession: 'Developer',
        gender: 'F'
      }
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
