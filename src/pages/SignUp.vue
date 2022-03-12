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
    <input
      type="text"
      class="border border-blue-500 w-96 mb-3 px-2 rounded-md"
      name="name"
      v-model="name"
      placeholder="Name"
    />
    <input
      type="text"
      class="border border-blue-500 w-96 mb-3 px-2 rounded-md"
      name="handle"
      v-model="handle"
      placeholder="Handle"
    />
    <button
      class="bg-blue-500 text-white py-1 px-4 rounded"
      v-on:click="onSignUpPress"
    >
      Sign up
    </button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SignUp',
  data: function () {
    return {
      email: '',
      password: '',
      name: '',
      handle: ''
    }
  },
  methods: {
    onSignUpPress: async function () {
      try {
        const response = await axios.post(`http://localhost:8000/signup`, {
          email: this.email,
          password: this.password,
          handle: this.handle,
          name: this.name
        })
        alert(
          `User registered ✅: Name ${response.data.user.name} - Email ${response.data.user.email}`
        )
      } catch (error) {
        alert('Error registering user 😒')
      }
    }
  }
}
</script>
