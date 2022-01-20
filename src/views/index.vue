<template>
    <div>
        <span>INDEX</span>
        <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
        <div @click="indexClick">父组件上面的点击按钮</div>
        <div @click="goUrl">
            <span>用函数的方法跳转到page2页面</span>
        </div>
         <el-button type="default" @click="click0">点击改变下方数据</el-button>
        <div><p>{{indexTitle}}</p></div>
        <el-button type="info" @click="click1">点击改变非响应式title(会失败)</el-button>
        <el-button type="success" @click="click2">点击改变响应式title(会成功)</el-button>
        <div style="background:rgb(233, 152, 152) ;">
            <IndexComponent msg="propsMsg" ref="IndexComponent1" @emitFnc1="emitFnc1"/>
        </div>
        
    </div>
</template>


<script setup lang="ts">
import { ref } from '@vue/reactivity'
import { onMounted, provide,readonly, watchEffect } from 'vue-demi';
import { useRoute, useRouter } from 'vue-router';
  const router = useRouter()
  const route = useRoute();
  

  import HelloWorld from '../components/HelloWorld.vue'
  import IndexComponent from '../components/IndexComponent.vue'

let indexMsg2:String = ref('来之index组件的provide ref信息')
  let indexMsg = 'index组件的provide信息'
  const IndexComponent1 = ref(null);
  const indexTitle = ref('index组件的测试数据')
  onMounted(()=>{
      console.log('mounted事件触发')
  })
  
  provide('indexMsg',readonly(indexMsg))  //添加readonly 子组件就没法改变父组件传过去的内容
  provide('indexMsg2',readonly(indexMsg2))

  

   
  watchEffect(()=>{
      console.log('watchEffect2:'+ indexTitle.value)
  },{flush: 'post'})

   watchEffect(()=>{
      console.log('watchEffect1:'+ indexTitle.value)   //1比2早
  })

  let click0 = ()=>{
      indexTitle.value = 'index组件的测试数据被改变了'+new Date()
  }
  let click1 = ()=>{
    indexMsg = '66666'
}
let click2 = ()=>{
    indexMsg2.value = '66666'
}
  let indexClick = ()=>{
      console.log(IndexComponent1.value)
      IndexComponent1?.value?.childClick();
  }
  let emitFnc1 = (info:String)=>{
      console.log(info)
  }
  let goUrl=()=>{
      router.push({
          path:'/helloWorld',
          query:{
              
          }
      })
  }
</script>