<template>
    <div>
        <h2>{{ name }}</h2>
        <button @click="setName">Change Name</button>

        {{ count }}
        <button @click="incCount">Icrease Count</button>

        <h2>{{ first }} {{ last }}</h2>
        <button @click="changeName">Change Hero</button>
    </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
    export default {
        name: 'MethodS',
        setup(){
            const count = ref(0)
            const state = reactive({
                first: 'Test First',
                last: 'Test Last'
            })

            function incCount() {
                count.value++
            }

            function changeName() {
                state.first = 'New First'
                state.last = 'New Last'
            }

            return{
                count,
                incCount,
                ...toRefs(state),
                changeName
            }
        },
        data() {
            return{
                name: 'Rehan'
            }
        },
        methods: {
            setName(){
                this.name = 'Ansari'
            }

        }
    }
</script>

<style scoped>

</style>