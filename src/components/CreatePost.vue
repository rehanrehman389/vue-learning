<template>
    <div>
        <form @submit.prevent="createPost">
            <div>
                <label for="userId">Post User Id</label>
                <input type="text" id="userId" v-model="formData.userId" />
            </div>
            <div>
                <label for="title">Post Title Id</label>
                <input type="text" id="title" v-model="formData.title" />
            </div>
            <div>
                <label for="body">Post Body Id</label>
                <input type="text" id="body" v-model="formData.body" />
            </div>
            <button type="submit">Create Post</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name: 'CreatePost',
        data() {
            return {
                formData: {
                    userId: '',
                    title: '',
                    body: ''
                }
            }
        },
        methods: {
            createPost() {
                axios.post('https://jsonplaceholder.typicode.com/posts', this.formData)
                    .then(r => console.log(r))
                    .catch(e => console.log(e))
            }
        }
    }
</script>

<style scoped>

</style>