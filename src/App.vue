<template>
  <div>
    <pre>{{ formValues }}</pre>
  </div>
  <form @submit="submitForm">
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" v-model="formValues.name">
    </div>
    <div>
      <label for="profile">Profile</label>
      <textarea id="profile" v-model="formValues.profileSummary" />
    </div>
    <div>
      <label for="country">Country</label>
      <select id="country" v-model="formValues.country">
        <option value="">Select a country</option>
        <option value="India">India</option>
        <option value="singapore">Singapore</option>
      </select>
    </div>
    <div>
      <label for="skills">Skills</label>
      <select id="skills" multiple v-model="formValues.skills">
        <option value="java">JAVA</option>
        <option value="sql">SQL</option>
      </select>
    </div>
    <div>
      <input type="checkbox" id="remotework" v-model="formValues.remoteWork" true-value="yes" false-value="no" />
      <label for="remotework">Open to remote?</label>
    </div>

    <div><button>Submit</button></div>
  </form>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      formValues: {
        name: '',
        profileSummary: '',
        country: '',
        skills: [],
        remoteWork: "no"
      }
    }
  },
  methods: {
    submitForm(event) {
      event.preventDefault()
      console.log('Form Values', this.formValues)
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
