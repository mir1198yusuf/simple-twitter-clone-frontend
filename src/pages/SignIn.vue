<template>
  <div class="flex flex-col items-center">
    <p class="my-5 text-2xl font-semibold text-blue-500">Sign up</p>
    <input
      type="email"
      class="border border-blue-500 w-96 mb-3 px-2 rounded-md"
      name="email"
      v-model="email"
      placeholder="Email"
    />
    <input
      type="password"
      class="border border-blue-500 w-96 mb-3 px-2 rounded-md"
      name="password"
      v-model="password"
      placeholder="Password"
    />

    <button
      class="bg-blue-500 text-white py-1 px-4 rounded"
      v-on:click="onSignInPress"
    >
      Sign in
    </button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SignIn',
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    onSignInPress: async function () {
      try {
        const response = await axios.post(`http://localhost:8000/signin`, {
          email: this.email,
          password: this.password
        })
        alert(`User logged in ✅`)
        // 🚨 storing jwt in session storage is not secure
        sessionStorage.jwt = response.data.jwt
      } catch (error) {
        alert('Error logging user 😒')
      }
    }
  }
}
</script>
