
import {Index,RefIndex} from './type'
import useCurrentInstance from "@/utils/useCurrentInstance";
import { ElMessage } from 'element-plus'
  

export async function getMenu(name:string):Promise<RefIndex>{
    const {proxy} = useCurrentInstance();
    let res = await proxy.$request(name);
    if(res.data.code!==0){
        ElMessage({ message: res.data.message, type: 'error', })
    }
    return {value:res.data.list}
}

