<script setup lang="ts">
import router from "../router";

const logout = () => {
  localStorage.clear();
  router.push({ name: "Login" });
};
</script>
<template>
  <div class="nav">
    <router-link class="nav-link" to="/">Home</router-link>
    <router-link class="nav-link" to="/add">Add Restaurant</router-link>
    <router-link class="nav-link" to="/update">Update Restaurant</router-link>
    <a class="nav-link" href="" v-on:click="logout">Logout</a>
  </div>
</template>
<style>
.nav {
  display: flex;
  justify-content: right;
  gap: 20px;
  margin-top: 30px;
}
.nav-link {
  color: black;
  font-size: larger;
  text-decoration: none;
  transition: all 0.3s ease;
}
.nav-link:hover {
  color: #333;
  text-decoration: underline;
}
</style>
