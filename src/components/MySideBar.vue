<template>
  <div class="my-10 mx-5 border-r-2">
    <nav>
      <ul>
        <li class="text-2xl font-bold mb-4">
          <router-link to="/">Home</router-link>
        </li>
        <li class="text-2xl font-bold mb-4">
          <router-link v-bind:to="userIdLink">Profile</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'MySideBar',
  computed: {
    userIdLink: function () {
      return `/users/${sessionStorage.userId}`
    }
  }
}
</script>
