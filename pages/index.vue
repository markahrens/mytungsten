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
</script >

<style>

.nuxt-content h2{
  text-align: center;
  font-weight: 200;
  font-style: italic;
}
</style>