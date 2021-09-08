<template>
  <article>
    <h1>Ghana 2013</h1>
    <ul class="post-list">
      <li v-for="post of posts" :key="post.slug">
        <NuxtLink :to="{ name: 'trips-ghana2013-slug', params: { slug: post.slug } }">
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
        .only(['title','slug'])
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
  width: 300px;
  text-align: center;
  list-style-type: none;

}

</style>