<template>
    <div>
        <h2>This is a POPUP</h2>
        <button @click="$emit('close', 'MID')">Close Popup</button>
    </div>

</template>

<script>
    export default {
        name: 'PopUp',
        emits: ['close']
    }
</script>

<style scoped>

</style>