<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();
const name = ref("");
const email = ref("");
const password = ref("");

const signup = async () => {
  console.warn("Sign up Success", name.value, email.value, password.value);
  let result = await axios.post("http://localhost:3000/users", {
    email: email.value,
    password: password.value,
    name: name.value,
  });
  console.warn("result", result);
  if (result.status == 201) {
    localStorage.setItem("user-info", JSON.stringify(result.data));
    router.push({ name: "Home" }); // ✅ AB KAAM KAREGA
  }
};
</script>
<template>
  <div class="signup">
    <img class="logo" src="../assets/resto.jpg" alt="" />
    <h1>Sign Up Component</h1>
    <div class="signup-form">
      <label class="input-label" for="Name">Name: </label>
      <input
        class="input-field"
        type="text"
        placeholder="Enter Name"
        v-model="name"
      />
      <br />
      <br />

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
      <button class="signup-btn" v-on:click="signup">Sign Up</button>
    </div>
  </div>
</template>

<style>
.signup {
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
.signup-btn {
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
