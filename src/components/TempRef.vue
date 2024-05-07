<template>
    <div>
        <input type="text" ref="inputRef" />
        <PostList ref="postListRef" />
    </div>
</template>

<script>
import {ref, onMounted} from 'vue'
import PostList from './PostList.vue'
    export default {
        name: 'TempRef',
        setup() {
            const inputRef = ref(null)

            onMounted(() => {
                inputRef.value.focus()
            })

            return{
                inputRef
            }
        },
        components: {
            PostList
        },
    }
</script>

<style scoped>

</style>