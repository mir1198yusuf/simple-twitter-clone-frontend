<template>
  <div>
    <MyHeader />
    <router-view> </router-view>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
export default {
  name: 'App',
  components: {
    MyHeader
  }
}
</script>
