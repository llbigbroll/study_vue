<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/Date">Date</router-link> |
    <router-link to="/address">Address</router-link>
  </nav>
  <router-view/>
</template>

<style>
/* Main */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

/* AdressView.vue */
.inputAddress {
  width: 300px;
  margin-right: 10px;
}
.areaAddress {
  margin-top: 50px;
}
</style>
