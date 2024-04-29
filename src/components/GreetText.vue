<template>
    <h2>hello {{ name }} a.k.a {{ heroname }}</h2>
</template>

<script>
export default {
    name: 'GreetText',
    props: ['name', 'heroname']
}
</script>
