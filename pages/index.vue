<template>
  <article>
    <h1>{{ page.title }}</h1>
    <nuxt-content :document="page" />
  </article>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const page = await $content('index').fetch()

    return {
      page
    }
  }
}
</script>

<style>
h1{
  text-align: center;
  font-size: 4rem;
  margin: 40px 0;
}
.nuxt-content h2{
  text-align: center;
  font-weight: 200;
  font-style: italic;
}
</style>