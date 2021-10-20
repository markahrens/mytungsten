<template>
  <article>
    <nuxt-img sizes="sm:100vw lg:100vw xl:90vw"  fit="cover" :src="post.img" :alt="post.alt" class="hero-image"/>
    <h1>{{ post.title }}</h1>
    <p class="date">{{ post.date | formatDate}}</p>
    <nuxt-content :document="post" />
  </article>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const post = await $content('trips/ghana2013', params.slug).fetch()
      return { post }
    },
    head() {
      return {
        title: this.post.title + " | Ghana 2013 | MyTungsten",
      }
    }
  }
</script>

<style>

.nuxt-content,
.date{
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

.date{
  text-align: center;
}

</style>