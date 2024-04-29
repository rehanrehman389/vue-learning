<template>
    <h2>Component F</h2>
    <h2>F {{ username }}</h2>
</template>

<script>
    export default {
        name: 'CompF',
        inject: ['username']
    }
</script>

<style scoped>

</style>