<template>
  <div class="m-10 border-blue-500 border-2 p-2 text-center">
    <p>
      Name: <span class="text-blue-500">{{ user.name }}</span>
    </p>
    <p>
      Email: <span class="text-blue-500">{{ user.email }}</span>
    </p>
    <p>
      Handle: <span class="text-blue-500">{{ user.handle }}</span>
    </p>
    <button
      v-if="!isFollowing"
      class="bg-blue-500 text-white py-1 px-4 rounded"
      v-on:click="onFollowPress"
    >
      Follow
    </button>
    <p v-else class="text-blue-500 font-bold">Following ✔️</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'UserProfile',
  props: ['userId'],
  data: function () {
    return {
      user: {},
      isFollowing: false
    }
  },
  created: async function () {
    try {
      // get user profile
      const response = await axios.get(
        `http://localhost:8000/users/${this.userId}`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.jwt}`
          }
        }
      )
      if (!response.data.user.id) {
        throw new Error()
      }
      this.user = response.data.user
      // check if following
      const response1 = await axios.get(
        `http://localhost:8000/users/${this.userId}/followers`,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.jwt}`
          }
        }
      )
      this.isFollowing =
        response1.data.followers.find(
          (item) => item.followTo === this.userId
        ) && true
    } catch (error) {
      alert('Error getting user 😒')
    }
  },
  methods: {
    onFollowPress: async function () {
      try {
        await axios.post(
          `http://localhost:8000/users/${this.userId}/followers`,
          {},
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.jwt}`
            }
          }
        )
        alert(`User followed ✅`)
      } catch (error) {
        alert('Error following user 😒')
      }
    }
  }
}
</script>
