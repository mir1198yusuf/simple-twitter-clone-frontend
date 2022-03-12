<template>
  <div class="m-10">
    <div class="flex flex-row align-middle justify-center">
      <input
        type="text"
        name="newTweet"
        v-model="newTweet"
        class="border border-blue-500 w-[100%] px-2 rounded-md"
        placeholder="Type your text here..."
      />
      <button
        class="bg-blue-500 text-white py-1 px-4 mx-1 rounded"
        v-on:click="onNewTweetPress"
      >
        Tweet
      </button>
    </div>
    <p class="text-2xl mt-5 font-semibold text-blue-500">
      Tweets from followed users
    </p>
    <TweetCard
      v-for="tweet in tweets"
      v-bind:tweet="tweet"
      v-bind:key="tweet.id"
    />
  </div>
</template>

<script>
import axios from 'axios'
import TweetCard from '@/components/TweetCard.vue'
export default {
  components: { TweetCard },
  name: 'MyHome',
  data: function () {
    return {
      tweets: [],
      newTweet: ''
    }
  },
  methods: {
    onNewTweetPress: async function () {
      try {
        await axios.post(
          'http://localhost:8000/tweets',
          {
            text: this.newTweet
          },
          { headers: { Authorization: `Bearer ${sessionStorage.jwt}` } }
        )
        alert(`Tweet created ✅`)
      } catch (error) {
        alert('Error creating tweet 😒')
      }
    }
  },
  created: async function () {
    try {
      const response = await axios.get('http://localhost:8000/tweets', {
        headers: {
          Authorization: `Bearer ${sessionStorage.jwt}`
        }
      })
      this.tweets = response.data.tweets
    } catch (error) {
      alert('Error getting tweets 😒')
    }
  }
}
</script>
