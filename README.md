# t-navigation

## 使用
App.vue
第1步：导入混入
```
import navigationMixin from "./minxins/Navigation";
    export default {
        mixins: [navigationMixin],
    }
```

第二步：
keep-alive 绑定 :include="navigationArr"
```
<keep-alive :include="navigationArr">
    <router-view/>
</keep-alive>
```


