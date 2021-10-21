<template>
  <article>
    <h1>Ghana 2013</h1>
    <ul class="post-list">
      <li v-for="post of posts" :key="post.slug">
        <NuxtLink :to="{ name: 'trips-ghana2013-slug', params: { slug: post.slug } }">
          <div class="card__thumb">
            <nuxt-img width="400"  fit="cover" :src="post.img" :alt="post.alt" class="hero-image"/>
          </div>
          <div class="card__content">
             <h2>{{ post.title }}</h2>
          </div>
          
        </NuxtLink>
           
      </li>
    </ul>
  </article>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const posts = await $content('trips/ghana2013')
        .sortBy('date', 'asc')
        .fetch()

      return {
        posts
      }
    },
    head() {
      return {
        title: "Ghana 2013 | MyTungsten",
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
  flex-wrap: wrap;
}

.post-list li{
  width: 400px;
  list-style-type: none;
  margin-bottom: 40px;
}

.post-list li a {
    position: relative;
  display: grid;
  text-decoration: none;
}

.card__content {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px;
    background: linear-gradient(to top, #000000d9, #0000) bottom/100% 60% no-repeat;
}

.card__thumb,
.card__content {
    grid-area: 1/2;
}

</style>