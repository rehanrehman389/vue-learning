<template>
    <div>
        <input type="text" placeholder="First Name" v-model="fName" />
        <input type="text" placeholder="Last Name" v-model="lName" />
        <h2>{{ fullName }}</h2>


        <input type="text" placeholder="First Name" v-model="refFirstName" />
        <input type="text" placeholder="Last Name" v-model="refLastName" />
        <h2>{{ refFullName }}</h2>

        <input type="text" placeholder="First Name" v-model="reactiveFirstName" />
        <input type="text" placeholder="Last Name" v-model="reactiveLastName" />
        <h2>{{ reactiveFullName }}</h2>
    </div>
</template>

<script>
import { ref, computed, reactive, toRefs } from 'vue'
    export default {
        name: 'MethodS',
        setup() {
            const refFirstName = ref('')
            const refLastName = ref('')

            const refFullName = computed(function() {
                return `${refFirstName.value} ${refLastName.value}`
            })

            const reactiveFullName = computed(function() {
                return `${state.reactiveFirstName} ${state.reactiveLastName}`
            })

            // const heroName = ref('')
            const state = reactive({
                reactiveFirstName: '',
                reactiveLastName: ''
            })

            return{
                refFirstName,
                refLastName,
                refFullName,
                ...toRefs(state),
                reactiveFullName
            }
        },
        data() {
            return{
                fName: '',
                lName: ''
            }
        },
        computed: {
            fullName() {
                return `${this.fName} ${this.lName}`
            },
        },
    }
</script>

<style scoped>

</style>