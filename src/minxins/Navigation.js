import Vue from "vue";

const navigationArr = [];
Vue.prototype.push = function (path) {
    let name = this.$options.name;
    console.log(name);
    navigationArr.push(name);
    this.$router.push(path)
};
Vue.prototype.pop = function () {
    let name = this.$options.name;
    if (name === navigationArr[navigationArr.length - 1]) {
        navigationArr.pop()
    }
    this.$router.back()
};
const navigationMixin = {
    data() {
        return {
            navigationArr
        }
    },
};
export default navigationMixin
