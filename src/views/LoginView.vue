<script setup lang="ts">
import { ref } from 'vue'
import NavBar from '@/components/NavBar.vue'
import axios from 'axios'
import router from '@/router'

const username = ref<string>()
const password = ref<string>()
const error = ref<string>()

function login(event: MouseEvent) {
  event.preventDefault()

  axios.post(import.meta.env.VITE_API_URL + '/users/login', {
    username: username.value,
    password: password.value
  }).then(res => {
    console.log(res.data)
    if(res.data.success) {
      localStorage.setItem('token', res.data.token)
      router.push('/')
    }
  }).catch(err => {
    console.log(err)
    switch(err.response.data.error_code) {
      case 'WRONG_CREDENTIALS':
        error.value = 'Wrong username or password'
        break
    }
  })
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
        {{ error }}
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
