import request from "@/utils/request"

export default {
    userLogin(user){
        return request({
            url:"/user/login",
            method:'post',
            data: user
        })
    },
    testAxios(){
        return request({
            url:"/user/testaxios",
            method:'get',
        })
    },
    getUserIdByMobile(mobile){
        return request({
            url:"/user/getUserIdByMobile",
            method:'get',
            params:{mobile}
        })
    }
}