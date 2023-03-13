import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import Test from "../components/Test"
import Home from "../views/home/Home"
import Login from "../views/login/Login"
import Study from "../views/study/Study";
import GoodsDetails from "../views/goods/GoodsDetails";
import UserManager from "../views/user/UserManager";
// import * as path from "path";
import UserMain from "@/views/user/userMain/UserMain";
import GoodsPublish from "@/views/goods/GoodsPublish";
import GoodsManager from "@/views/user/userMain/GoodsManager";
import GoodsConfirmOrder from "@/views/goods/GoodsConfirmOrder";
import SalesStatistics from "@/views/user/userMain/SalesStatistics";
import AdminAside from "@/views/admin/AdminAside";
import AdminTypeManager from "@/views/admin/adminMain/AdminTypeManager";

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path:"/",
        component: Test,
        redirect:"/login",
        children:[
            {
                path:"home",
                component:Home
            },
            {
                path: "goodsdetails/:id",
                component: GoodsDetails
            },
            {
              path:"goodspublish",
              component: GoodsPublish
            },
            {
                name:'GoodsConfirmOrder',
                path:"goodsconfirmorder",
                component: GoodsConfirmOrder
            },
            {
                path:"usermanager",
                component: UserManager,
                redirect:"/usermanager/usermain",
                children:[
                    {
                    path:"usermain",
                    component:UserMain
                    },
                    {
                        path:"goodsmanager",
                        component: GoodsManager
                    },
                    {
                        path:"salesstatistics",
                        component: SalesStatistics
                    }
                    ]
            },
            {
                path:"adminaside",
                component: AdminAside,
                redirect:"/adminaside/admintypemanager",
                children:[
                    {
                        path:"admintypemanager",
                        component:AdminTypeManager
                    }
                ]
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