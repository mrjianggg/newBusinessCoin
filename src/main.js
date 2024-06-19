import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'
import 'windi.css'
// 引入公共的CSS文件
import './assets/css/common.css'
// 1. 引入你需要的组件
import { Collapse, CollapseItem,Swipe, SwipeItem, Popup } from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';


const app = createApp(App)

// 3. 注册你需要的组件
app.use(Collapse);
app.use(CollapseItem);
app.use(Swipe);
app.use(SwipeItem);
app.use(Popup);

app.use(i18n)
app.mount('#app')