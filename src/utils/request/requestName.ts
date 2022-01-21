
interface ObjIF{
    [index:string]:object
}

export let apiName:ObjIF ={
    menuList:{
        request:'get',
        url:'/public/mock/menuList.json'
    }
}