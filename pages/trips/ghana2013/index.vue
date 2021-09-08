<template>
  <article>
    <h1>Ghana 2013</h1>
    <ul>
      <li v-for="post of posts" :key="post.slug">
            <h2>{{ post.title }}</h2>
      </li>
    </ul>
  </article>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const posts = await $content('trips/ghana2013')
        .only(['title'])
        .fetch()

      return {
        posts
      }
    }
  }
</script>