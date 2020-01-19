<template>
    <section>
    
        <h2>error</h2>

        <p v-if="error.statusCode === 404">page not found</p>
        <p v-else>error</p>

    </section>
</template>



<script>
export default {
    props: ['error'],
}
</script>



<style>
</style>
