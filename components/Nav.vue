<template>
    <nav>
        <a href="/" id="site-title">MyTungsten</a>
        <ul>
            <li><a href="https://bowls.mytungsten.net">Bowls</a></li>
            <li><NuxtLink to="/trips">Trips</NuxtLink></li>
            <li><a href="/">Blog</a></li>
        </ul>
    </nav>
</template>

<style scoped>

nav{
    display: flex;
    justify-content: space-between;
    background-color:var(--bg-secondary);
    color: var(--color-secondary);
    padding: 20px;
}

nav ul{
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction:row;
}

nav ul li{
    list-style-type: none;
    padding: 0 10px;
    margin: 0;
}

#site-title{
    font-weight: 800;
    font-size: 1.2rem;
}

</style>