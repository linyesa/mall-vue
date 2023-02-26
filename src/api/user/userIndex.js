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
    }
}