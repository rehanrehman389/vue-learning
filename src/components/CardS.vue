<template>
    <div class="card">
        <!-- {{ content }} -->
        <div id="card-header">
            <slot name="header"></slot>
        </div>
        <div id="card-content">
            <slot></slot>
        </div>
        <div id="card-footer">
            <slot name="footer"></slot>
        </div>
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