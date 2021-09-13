<template>
  <article>
    <nuxt-img sizes="sm:100vw lg:100vw xl:90vw"  fit="cover" :src="post.img" :alt="post.alt" class="hero-image"/>
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
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px 20px;
}

.nuxt-content{
  font-size: 1.2rem;
  line-height: 2rem;
}

.hero-image{
  margin: 0 auto;
  display: block;
}

</style>