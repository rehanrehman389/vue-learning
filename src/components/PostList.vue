<template>
    <div>
        <button @click="getPosts">Load Posts</button>
        <h3 v-if="errorMsg">{{ errorMsg }}</h3>
        <div v-for="post in posts" :key="post.id">
            <h3>{{ post.id }} {{ post.title }}</h3>
            <p>{{ post.body }}</p><hr />
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name: 'PostList',
        data() {
            return {
                posts: [],
                errorMsg: ''
            }
        },
        methods: {
            getPosts() {
                axios.get('https://jsonplaceholder.typicode.com/postss')
                    .then((r) => {
                        this.posts = r.data
                    })
                    .catch((e) => {
                        console.log(e)
                        this.errorMsg = 'Error while retriving data'
                    })
            }
        }
    }
</script>

<style scoped>

</style>