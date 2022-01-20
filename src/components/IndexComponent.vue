<template>
    <div>
        <div>
            <span>indexComponent</span> ||
            <span>{{msg}}</span>
            <div><el-button @click="childEmit">来自子组件的点击事件触发emit</el-button></div>
            <div><span>index组件不响应的title:{{indexMsg}}</span></div>
            <div><span>index组件响应的title:{{indexMsg2}}</span></div>

            <el-button type="info" @click="click1">点击改变非响应式title(会失败)</el-button>
            <el-button type="success" @click="click2">点击改变响应式title(会成功)</el-button>

            <div style="background:pink">
                <IndexComCom />
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>
import { inject } from 'vue-demi';
import IndexComCom from './IndexComCom.vue';

const props = defineProps({
    msg:{
        type:String,
        default:'default'
    }
})
const emit = defineEmits([
    'emitFnc1'
])

let indexMsg =  inject('indexMsg')
let indexMsg2 =  inject('indexMsg2')

let click1 = ()=>{
    indexMsg = '66666'
}
let click2 = ()=>{
    indexMsg2.value = '77777'
}
let childClick = ()=>{
    console.log('父组件触发了子组件里面的方法')
}
let childEmit = ()=>{
    emit('emitFnc1','这是子组件向父组件通知的一句话')
}
 defineExpose({
     childMsg:'子组件的变量',
     childClick
})
</script>