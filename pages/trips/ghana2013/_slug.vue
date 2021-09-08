<template>
  <article>
    <h1>{{ post.title }}</h1>
    <nuxt-content :document="post" />
  </article>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const post = await $content('trips/ghana2013', params.slug).fetch()

      return { post }
    }
  }
</script>

<style>

.nuxt-content{
  max-width: 800px;
  margin: 0 auto;
}

</style>