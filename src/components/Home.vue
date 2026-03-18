<template>
  <Header />
  <h1>Hello {{ name }}, Welcome to Home Page</h1>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Header from "./Header.vue";
import router from "../router";

const name = ref("");

onMounted(() => {
  let user = localStorage.getItem("user-info");
  name.value = JSON.parse(user).name;
  if (!user) {
    router.push({ name: "SignUp" });
  }
});
</script>
