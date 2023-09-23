<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import { ref } from 'vue'

let username = ref<string>()
let password = ref<string>()

async function login(event: MouseEvent) {
  event.preventDefault()

  let res = await fetch(import.meta.env.VITE_API_URL + '/users/login', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username,
      password
    })
  })

  let data = await res.json()

  console.log(data)
}
</script>

<template>
  <main>
    <NavBar />
    <div class="wrapper">
      <span>Login to CenterDash account:</span>
      <form>
        <input type="text" placeholder="Username" v-model="username">
        <input type="password" placeholder="Password" v-model="password">
        <button @click="login">Login</button>
      </form>
    </div>
  </main>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  gap: 1.5rem;

  & > span {
    font-size: 1.5rem;
    font-weight: 500;
  }

  & > form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
