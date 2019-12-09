<template>
    <div>
        <button @click="pop()">back</button>
        <input type="text" v-model="val">
        <div @click="handlerCLick">to page3</div>

    </div>
</template>

<script>
    export default {
        name: "Input2",
        data() {
            return {
                val: ''
            }
        },
        methods: {
            handlerCLick() {
                this.push('/input3')
            }
        },
    }
</script>

<style scoped>

</style>
