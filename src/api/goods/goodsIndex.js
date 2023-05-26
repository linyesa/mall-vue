import request from "@/utils/request"

export default {
    getGoodsInfo(){
        return request({
            url:"/goods/getGoodsInfo",
            method:'get'
        })
    },
    getDetailById(id){
        return request({
            url:"/goods/getDetailById/"+id,
            method:'get'
        })
    },
    searchGoods(searchVO){
        return request({
            url:"/goods/searchGoods",
            method:'post',
            data:searchVO
        })
    },
    saveGoods(ruleForm){
        return request({
            url:"/goods/saveGoods",
            method:'post',
            data:ruleForm
        })
    },
    getGoodsInfoByUserId(userId,status){
        return request({
            url:`/goods/getOnGoodsInfoByUserId/${userId}/${status}`,
            method:'get'
        })
    },
    getAllGoods(page,size){
        return request({
            url:`/goods/getAllGoods/${page}/${size}`,
            method:'get'
        })
    },
    goodsOffShelf(goodsId){
        return request({
            url:"/goods/goodsOffShelf",
            method:'delete',
            params:{"goodsId":goodsId}
        })
    },
    goodsSearch(searchForm){
        return request({
            url:"goods/search",
            method:'post',
            data:searchForm
        })
    }

}