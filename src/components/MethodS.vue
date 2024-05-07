<template>
    <div>
        <input type="text" placeholder="Name" v-model="firstName" />
        <input type="text" placeholder="Name" v-model="lastName" />
    </div>
</template>

<script>
import { ref, watch } from 'vue'
    export default {
        name: 'MethodS',
        setup() {
            const firstName = ref('')
            const lastName = ref('Mid')

            watch([firstName, lastName], (newValues, oldValues) => {
                console.log('Ref FirstName Old Value', oldValues[0])
                console.log('Ref FirstName New Value', newValues[0])
                console.log('Ref LastName Old Value', oldValues[1])
                console.log('Ref LastName New Value', newValues[1])
            }, {immediate: true})

            return{
                firstName,
                lastName
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