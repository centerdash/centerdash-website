<script setup lang="ts">
import { ref } from 'vue'
import NavBar from '@/components/NavBar.vue'
import axios from 'axios'
import VueHcaptcha from '@hcaptcha/vue3-hcaptcha'
import router from '@/router'

const username = ref<string>()
const password = ref<string>()
const captcha = ref<string>()
const error = ref<string>()
const hCaptcha = ref<VueHcaptcha|null>(null)

const sitekey = import.meta.env.VITE_HCAPTCHA_SITEKEY

function onCaptchaVerify(token: string) {
  captcha.value = token
}

function register(event: MouseEvent) {
  event.preventDefault()

  axios.post(import.meta.env.VITE_API_URL + '/users/register', {
    username: username.value,
    password: password.value,
    captcha: captcha.value
  }).then(res => {
    if(res.data.success) {
      localStorage.setItem('token', res.data.token)
      router.push('/')
    }
  }).catch(err => {
    hCaptcha.value?.reset()

    switch(err.response.data.error_code) {
      case 'USERNAME_TAKEN':
        error.value = 'Username is already taken!'
        break
      case 'BAD_CAPTCHA':
        error.value = 'Failed to validate captcha'
        break
    }
  })
}
</script>

<template>
  <main>
    <NavBar />
    <div class="wrapper">
      <span>Register new CenterDash account:</span>
      <form>
        <input type="text" placeholder="Username" v-model="username">
        <input type="password" placeholder="Password" v-model="password">
        {{ error }}
        <vue-hcaptcha ref="hCaptcha" :sitekey="sitekey" @verify="onCaptchaVerify" />
        <button @click="register">Register</button>
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
