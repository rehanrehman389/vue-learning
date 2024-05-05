<template>
    <h3 v-for="name in names" :key="name.firstName">
        <slot :firstName="name.firstName" :lastName="name.lastName"></slot>
    </h3>
</template>

<script>
    export default {
        name: 'NameList',
        data() {
            return {
                names: [
                    {
                        firstName: 'Rehan',
                        lastName: 'Ansari'
                    },
                    {
                        firstName: 'Midhat',
                        lastName: 'Ayesha'
                    },
                    {
                        firstName: 'Ayesha',
                        lastName: 'Shaikh'
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>