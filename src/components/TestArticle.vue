<template>
    <div>
        <h2>Article Component</h2>
        <h2>{{ title }}</h2>
        <h2> {{ likes }} </h2>
        <h2>{{ isPublished ? 'Yes' : 'No'}}</h2>
    </div>
</template>

<script>
    export default {
        name: 'TestArticle',
        props: {
            title: {
                type: String,
                required: true,
                default: 'Article default title'
            },
            likes: Number,
            isPublished: Boolean,
        }
    }
</script>