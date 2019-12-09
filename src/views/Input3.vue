<template>
    <div>
        <button @click="pop()">back</button>
        <input type="text" v-model="val">
    </div>
</template>

<script>
    export default {
        name: "Input3",
        data() {
            return {
                val: ''
            }
        },
    }
</script>

<style scoped>

</style>
