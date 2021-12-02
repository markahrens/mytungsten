<template>
    <nav>
        <a href="/" id="site-title">MyTungsten</a>
        <ul>
            <li><NuxtLink to="/projects">Projects</NuxtLink></li>
            <li><NuxtLink to="/trips">Trips</NuxtLink></li>
            <li><a href="/">Blog</a></li>
        </ul>
    </nav>
</template>

<style scoped>

nav{
    display: flex;
    justify-content: space-between;
    background-color:var(--clr-20);
    color: var(--clr-90);
    padding: 20px;
}

nav a {
    color: var( --clr-90);
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

@media (prefers-color-scheme: dark) {
    nav{
        background-color:var(--clr-30);
        color: var(--clr-10);
    }
}

</style>