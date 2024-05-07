<template>
    <div>
        <h2>{{ firstname }} {{ lastname }}</h2>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
    export default {
        name: 'DemoTwo',
        setup() {
            const state = reactive({
                firstname: 'Midhat',
                lastname: 'Ayesha'
            })

            setTimeout(() => {
                state.firstname = 'Rehan'
                state.lastname = 'Ansari'
                console.log(state)
            }, 2000)

            // return{
            //     // state
            //     firstname: state.firstname,
            //     lastname: state.lastname
            // }

            return toRefs(state) //for reactivity
        }
    }
</script>

<style scoped>

</style>