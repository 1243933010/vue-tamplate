<template>
    <div>
        <span>这条信息来着indexComponent组件的子组件IndexComCom</span>
        <div>
            <p>{{indexMsg}}</p>
            <p>{{indexMsg2}}</p>

        </div>
    </div>
</template>



<script setup lang="ts">
import { inject } from 'vue-demi';


let indexMsg =  inject('indexMsg')
let indexMsg2 =  inject('indexMsg2')
</script>

<style>

</style>