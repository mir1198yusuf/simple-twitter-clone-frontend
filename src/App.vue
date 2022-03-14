<template>
  <div>
    <MyHeader />
    <div class="flex flex-rol m-10">
      <div class="w-[20%]">
        <MySideBar />
      </div>
      <div class="w-[80%]"><router-view> </router-view></div>
    </div>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MySideBar from './components/MySideBar.vue'
export default {
  name: 'App',
  components: {
    MyHeader,
    MySideBar
  }
}
</script>
