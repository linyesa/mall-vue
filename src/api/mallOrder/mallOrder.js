import request from "@/utils/request";

export default {
    createOrder(orderVO){
        return request({
            url:"/mall-order/createOrder",
            method:'post',
            data:orderVO
        })
    },
    getOrderChartsData(id){
        return request({
            url:"/mall-order/getOrderChartsData/"+id,
            method:'get'
        })
    }

}