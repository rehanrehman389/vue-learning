<template>
  <h2>{{ firstName }} {{ lastName }}</h2>
  <h2> {{ fullName }}</h2>
  <h2>Total - {{ items.reduce((total, curr) => (total = total + curr.price), 0)}}</h2>
  <button @click="items.push({id: 4, title: 'Keyboard', price: 40})">Add Item</button>
  <h2>{{ total }}</h2>
  <h2>Method {{ getTotal() }}</h2>
  <input type="text" v-model="country">
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      firstName: 'Rehan',
      lastName: 'Ansari',
      items: [
        {
            id: 1,
            title: 'TV',
            price: 100
        },
        {
            id: 2,
            title: 'Mobile',
            price: 150
        },
        {
            id: 3,
            title: 'Laptop',
            price: 400
        }
      ],
      country: ''
    }
  },
  methods: {
    getTotal() {
      console.log('get total method')
      return this.items.reduce((total, curr) => (total = total + curr.price), 0)
    }
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    },
    total() {
      console.log('total computed')
      return this.items.reduce((total, curr) => (total = total + curr.price), 0)
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
