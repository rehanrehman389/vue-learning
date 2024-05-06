<template>
    <h2>hello {{ t_name }} user {{ t_username }} a.k.a {{ t_heroname }}</h2>
    <h2>{{ greet }}</h2>

    <h2>hello {{ state.t_name }} user {{ state.t_username }} a.k.a {{ state.t_heroname }}</h2>
    <h2>{{ newgreet }}</h2>
</template>

<script>
import { ref, reactive } from 'vue'
export default {
    name: 'GreetText',
    setup() {
        const t_name = ref('Ansari')
        const t_username = ref('ansariofficial')
        const t_heroname = ref('TTT')
        // t_name.value //access value

        const greet = `Hello ${t_name.value} of user ${t_username.value} aka ${t_heroname.value}`

        const state = reactive({
            t_name: 'Ayesha',
            t_username: 'midhat__shaikh',
            t_heroname: 'TTT'
        })

        const newgreet = `Hello ${state.t_name} of user ${state.t_username} aka ${state.t_heroname}`

        return {
            t_name,
            t_username,
            t_heroname,
            greet,
            newgreet,
            state
        }
    },
}
</script>
