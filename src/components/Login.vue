<script setup lang="ts">
import { onMounted, ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref("");
const password = ref("");

const login = async () => {
  let result = await axios.get(
    `http://localhost:3000/users?email=${email.value}&password=${password.value}`,
  );
  if (result.status == 200 && result.data.length > 0) {
    localStorage.setItem("user-info", JSON.stringify(result.data[0]));
    router.push({ name: "Home" });
  }
};
onMounted(() => {
  let user = localStorage.getItem("user-info");
  if (user) {
    router.push({ name: "Home" });
  }
});
</script>
<template>
  <div class="login">
    <img class="logo" src="../assets/resto.jpg" alt="" />
    <h1>Login</h1>
    <div class="login-form">
      <label class="input-label" for="Name">Email: </label>
      <input
        class="input-field"
        type="text"
        placeholder="Enter Email"
        v-model="email"
      />
      <br />
      <br />

      <label class="input-label" for="Name">Password: </label>
      <input
        class="input-field"
        type="password"
        placeholder="Enter Password"
        v-model="password"
      />
      <br />
      <br />
      <button class="login-btn" v-on:click="login">Login</button>
      <p>
        <router-link to="/signup"
          >Sign Up If you don't have a account</router-link
        >
      </p>
    </div>
  </div>
</template>

<style>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  padding-top: 10px;
}
.logo {
  width: 100px;
  border-radius: 10px;
}
.input-label {
  width: 100px;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
}
.input-field {
  width: 200px;
  height: 30px;
  border: 1px solid skyblue;
  border-radius: 5px;
  padding: 5px;
}
.login-btn {
  display: absolute;
  margin-top: 10px;
  width: 200px;
  height: 40px;
  background-color: skyblue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}
</style>
