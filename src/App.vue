<template>
  <!-- <GreetText name="Rehan" heroname="Rehu" />
  <GreetText name="Midhat" heroname="MID" />
  <GreetText :name="name" :heroname="heroname" /> -->

  <TestArticle id="my-article" title="Aritcle Title" :likes=50 :isPublished="true" />
</template>

<script>
import TestArticle from './components/TestArticle.vue'

export default {
  name: 'App',
  components: {
    TestArticle,
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
