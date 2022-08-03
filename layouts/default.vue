<template>
    <div>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
            @select="handleSelect">
            <el-menu-item index="0">
                <NuxtLink to="/">
                    <span class="font-semibold">
                        Apokon Elementary School
                    </span>
                </NuxtLink>
            </el-menu-item>
            <div class="flex-grow" />
            <el-menu-item index="1">
                <NuxtLink to="/history">History</NuxtLink>
            </el-menu-item>
            <el-menu-item index="2">
                <NuxtLink to="/admissions">Admissions</NuxtLink>
            </el-menu-item>
        </el-menu>
        <slot />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>
