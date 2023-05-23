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
    },
    getOrderByStatus(id,orderStatus){
        return request({
            url:"/mall-order/orderByStatus/"+id+"/"+orderStatus,
            method:'get'
        })
    },
    getOrderByOrderNo(orderNo){
        return request({
            url:"/mall-order/orderByNo/"+orderNo,
            method:'get'
        })
    }

}