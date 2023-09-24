<template>
  <header>
    <router-link to="/" class="logo">CenterDash</router-link>
    <div>
      <router-link to="/login">
        <button>Login</button>
      </router-link>
      <router-link to="/register">
        <button>Register</button>
      </router-link>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10rem;
  padding-right: 10rem;
  height: 3rem;
  background-color: #f7f7f7;

  @media screen and (max-width: 1000px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  & > div {
    display: flex;
    gap: 0.5rem;
  }
}

.logo {
  font-size: 1.5rem;
  font-weight: 900;
  color: #626262;
}
</style>
