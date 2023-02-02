import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import Test from "../components/Test"
import Home from "../views/home/Home"
import Login from "../views/login/Login"
import Study from "../views/study/Study";
import GoodsDetails from "../views/goods/GoodsDetails";
import UserManager from "../views/user/UserManager";
// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path:"/",
        component: Test,
        redirect:"/home",
        children:[
            {
                path:"home",
                component:Home
            },
            {
                path: "goodsdetails",
                component: GoodsDetails
            },
            {
                path:"usermanager",
                component: UserManager
            }
            ],
    },
    {
        path:"/login",
        component:Login,
    },
    {
        path:"/study",
        component: Study
    }

]

var router =  new VueRouter({
    routes
})
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
export default router;