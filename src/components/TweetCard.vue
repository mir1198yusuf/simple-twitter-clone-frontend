<template>
  <div class="my-3 border-2 p-2 border-blue-500">
    <p>
      Tweeted by:
      <router-link v-bind:to="userIdLink" class="underline text-blue-500">
        {{ tweet.tweetedBy }}</router-link
      >
    </p>
    <p>Tweeted at: {{ tweet.tweetedAt }}</p>
    <p class="italic text-blue-500">{{ tweet.text }}</p>
  </div>
</template>

<script>
export default {
  name: 'TweetCard',
  props: ['tweet'],
  computed: {
    userIdLink: function () {
      return `/users/${this.tweet.tweetedBy}`
    }
  }
}
</script>
