import request from "@/utils/request"

export default {
    pay(suject,traceNo,totalAmount){
        return request({
            url:"/alipay/pay?"+"subject="+suject+"&traceNo="+traceNo+"&totalAmount="+totalAmount,
            method:'get',
        })
    }
}