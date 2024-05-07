<template>
    <div>
        <input type="text" placeholder="Name" v-model="firstName" />
        <input type="text" placeholder="Name" v-model="lastName" />

    <!-- reactive -->
        <input type="text" placeholder="R First Name" v-model="fName" />
        <input type="text" placeholder="R Last Name" v-model="lName" />

    <!-- deep for nested properties -->
        <input type="text" placeholder="Heroname" v-model="options.heroName" />
    </div>
</template>

<script>
import { ref, watch, reactive, toRefs } from 'vue'
import _ from 'lodash'
    export default {
        name: 'MethodS',
        setup() {

            const state = reactive({
                fName: '',
                lName: '',
                options: {
                    heroName: ''
                }
            })

            // watch(() => {
            //     return {...state}
            // }, function(newValue, oldValue) {
            //     console.log('Fname Old Value', oldValue.fName)
            //     console.log('Fname New Value', newValue.fName)
            //     console.log('Lname Old Value', oldValue.lName)
            //     console.log('Lname New Value', newValue.lName)
            // })

            watch(() => _.cloneDeep(state.options), function(newValue, oldValue){
                console.log('Fname Old Value', oldValue)
                console.log('Fname New Value', newValue)
            },{deep: true})

            const firstName = ref('')
            const lastName = ref('Mid')

            // watch([firstName, lastName], (newValues, oldValues) => {
            //     console.log('Ref FirstName Old Value', oldValues[0])
            //     console.log('Ref FirstName New Value', newValues[0])
            //     console.log('Ref LastName Old Value', oldValues[1])
            //     console.log('Ref LastName New Value', newValues[1])
            // }, {immediate: true})

            return{
                firstName,
                lastName,
                ...toRefs(state)
            }
        },
        data() {
            return{
                name: '',
            }
        },
        watch: {
            name(newValue, oldValue){
                console.log('Old Value', oldValue)
                console.log('New Value', newValue)
            }
        }
    }
</script>

<style scoped>

</style>