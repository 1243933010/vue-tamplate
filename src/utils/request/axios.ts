import axios, { Method } from 'axios'
import { apiName } from './requestName'
import { ElLoading,ElMessage  } from 'element-plus'

interface ObjItem {
    request?: string,
    url?: string
}

let url:string = ''
 
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    ElLoading.service({text: '' }).close()
    return response;
}, function (error) {
    // 对响应错误做点什么
    ElLoading.service({text: error }).close()
    return Promise.reject(error);
});

export function $request(requestName: string, data: any) {
    ElLoading.service({text: '' })
    
    let obj = {
        params: {},
        data: {},
        methods:''
    }
    let thisReq: ObjItem = apiName[requestName];
    let method:any =  thisReq.request;
    console.log(thisReq, data, process)
    if (thisReq.request === 'get') {
        obj.params = data
    } else {
        obj.data = data
    }
    
    return new Promise((resolve, reject) => {
        axios({
            method:method,
            url: `${url}${thisReq.url}`,
            data: obj.data,
            params: obj.params,
            timeout: 10000,
            headers:{
              'Content-Type':'application/json'
            },
        }).then((res)=>{
            resolve(res)
            ElLoading.service({text: '' }).close()
        }).catch((err)=>{
            ElMessage.error(JSON.stringify(err.message))
        })
    })
}