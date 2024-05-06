<template>
    <h2>hello {{ t_name }} a.k.a {{ heroname }}</h2>
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'GreetText',
    setup() {
        const t_name = ref('Ansari')
        // t_name.value //access value

        return {
            t_name
        }
    },
    data() {
        return{
            name: 'Rehan',
            heroname: 'TTT'
        }
    }
}
</script>
