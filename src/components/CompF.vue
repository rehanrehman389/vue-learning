<template>
    <h2>Component F</h2>
    <h2>F {{ child_user }}</h2>
</template>

<script>
import { inject } from 'vue'
    export default {
        name: 'CompF',
        setup() {
            const child_user = inject('c_username', 'Default')

            return{
                child_user
            }
        },
    }
</script>

<style scoped>

</style>