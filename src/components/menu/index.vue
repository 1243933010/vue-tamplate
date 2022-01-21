<template>
    <div>
        <el-scrollbar>
            <el-menu :default-openeds="['1']">
                <el-sub-menu :index="item.index" v-for="(item, index) in menuList.value" :key="index">
                    <template #title>
                        <div>
                            <el-icon>
                                <component :is="item.icon"></component>
                        </el-icon>
                        {{item.name}}
                        </div>
                    </template>
                    <template v-if="item.list.length>0">
                       <el-menu-item-group v-for="(val, ind) in item.list" :key="ind">
                        <el-menu-item index="1-1">Option 1</el-menu-item>
                        <el-menu-item index="1-2">Option 2</el-menu-item>
                    </el-menu-item-group>
                    </template>
                    <el-sub-menu index="1-4">
                        <template #title>Option4</template>
                        <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
                    </el-sub-menu>
                </el-sub-menu>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script setup lang="ts">
import { Message, Menu as IconMenu, Setting } from '@element-plus/icons-vue';
import { reactive,ref } from 'vue';
import { getMenu } from './index';
import {RefIndex} from './type'

let menuList:RefIndex = ref([]);
menuList =  await getMenu('menuList');




console.log(menuList,'**')
</script>

<style lang="scss">
</style>