<template>
  <article>
    <h1>Ghana 2013</h1>
    <ul class="post-list">
      <li v-for="post of posts" :key="post.slug">
        <NuxtLink :to="{ name: 'trips-ghana2013-slug', params: { slug: post.slug } }">
          <nuxt-img width="400"  fit="cover" :src="post.img" :alt="post.alt" class="hero-image"/>
          <h2>{{ post.title }}</h2>
        </NuxtLink>
           
      </li>
    </ul>
  </article>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const posts = await $content('trips/ghana2013')
        .fetch()

      return {
        posts
      }
    }
  }
</script>

<style>

.post-list{
  display: flex;
  justify-content: space-between;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0;
}

.post-list li{
  width: 400px;
  text-align: center;
  list-style-type: none;

}

</style>