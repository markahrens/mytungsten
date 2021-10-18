<template>
  <article>
    <h1>Trips</h1>
    <div class="trip-list">
      <div><NuxtLink to="/trips/ghana2013">Ghana 2013</NuxtLink></div>
      <div>Ghana 2015</div>
      <div>Haiti 2017</div>
    </div>
  </article>
</template>

<style scoped>

.trip-list{
  display: flex;
  justify-content: space-around;
  max-width: 1024px;
  margin: 0 auto;
}

.trip-list div{
  width: 300px;
  text-align: center;
}

</style>