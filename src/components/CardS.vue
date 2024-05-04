<template>
    <div class="card">
        <!-- {{ content }} -->
        <slot>Default content</slot>
    </div>
</template>

<script>
    export default {
        name: 'CardS',
        props: ['content']
    }
</script>

<style scoped>

</style>