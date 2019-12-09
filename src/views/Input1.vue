<template>
    <div>
        <input type="text" v-model="val">
<!--        <router-link to="/input2">to page2</router-link>-->
        <div @click="handlerCLick">to page2</div>

    </div>
</template>

<script>
    export default {
        name: "Input1",
        data() {
            return {
                val: ''
            }
        },
        methods: {
            handlerCLick() {
                this.push('/input2')
            }
        },
    }
</script>

<style scoped>

</style>
