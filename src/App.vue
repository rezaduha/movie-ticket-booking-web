<script setup lang="ts">
import { RouterView, useRoute, useRouter } from 'vue-router'
import Navbar from './components/Navbar.vue'


const route = useRoute()
const router = useRouter()

function goBack() {
  route.path === '/history' ? router.push('/') : router.go(-1)
}
</script>

<template>
  <header v-if="route.path !== '/' && route.name">
    <Navbar :title="route.name.toString()" @onClick="goBack()" />
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped lang="scss">
header {
  position: relative;
  padding: 24px 16px;
}
</style>
