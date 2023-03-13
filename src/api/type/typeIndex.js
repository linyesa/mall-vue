import request from "@/utils/request";

export default {
        getTypeInfo(){
        return request({
            url:"/type/typeInfo",
            method:'get'
        })
    },
        addressType(typeChangeVO){
            return request({
                url:"type/addType",
                method:'post',
                data:typeChangeVO
            })
        },
        deleteTypeById(id){
            return request({
                url:"/type/deleteTypeById/"+id,
                method:'delete',
            })
        }

}