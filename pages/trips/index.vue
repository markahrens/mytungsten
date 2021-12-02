<template>
  <article>
    <h1>Trips</h1>
    <div class="trip-list">
      <div>
        <h3><NuxtLink to="/trips/ghana2013">Ghana 2013</NuxtLink></h3>
        <p>Based in the Winneba region</p>
      </div>
      <div>
        <h3>Ghana 2015</h3>
        <p>Based in Accra and Kumasi.</p>
      </div>
      <div>
        <h3>Haiti 2017</h3>
        <p>Based in Léogâne</p>
      </div>
    </div>
  </article>
</template>

<style scoped>

.trip-list{
  max-width: 1024px;
  margin: 0 auto;
}

.trip-list div{
  width: 600px;
  margin-bottom: 40px;
  font-weight: 500;
}

</style>