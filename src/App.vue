<template>
  <h2 v-for="(name, index) in names" :key="name">{{ index}} {{ name }}</h2>
  <h2 v-for="name in fullNames" :key="name.first"> {{ name.first }} {{ name.last }}</h2>

  <div v-for="actor in actors" :key="actor.name">
    <h2> {{ actor.name }}</h2>
    <h3 v-for="movie in actor.movies" :key="movie"> {{ movie }}</h3>
  </div>

  <h2 v-for="(value, key, index) in myinfo" :key="value">{{ index }} {{ key }} {{ value }}</h2>

  <template v-for="name in names" :key="name">
    <h2>{{ name }}</h2>
    <hr/>
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
