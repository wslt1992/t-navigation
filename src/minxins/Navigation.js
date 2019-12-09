import Vue from "vue";

const navigationArr = [];

/**
 * 当前路径下，当前组件的，组件name属性
 * @returns {string}
 */
function getComponentName() {
    return this.$route.matched[0].components.default.name;
}

Vue.prototype.push = function (path) {
    let name = getComponentName.call(this);
    console.log(name);
    navigationArr.push(name);
    this.$router.push(path)
};
Vue.prototype.pop = function () {
    let name = getComponentName.call(this);
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
