<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <main>
    <NavBar />
    <div class="wrapper">
      <span>CenterDash 1.0</span>
      <div>
        <a href="/download/CenterDash_1.0.zip">
          <button>Windows</button>
        </a>
        <a href="/download/CenterDash_1.0.apk">
          <button>Android</button>
        </a>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  gap: 0.5rem;

  & > span {
    font-size: 1.5rem;
    font-weight: 500;
  }

  & > div {
    display: flex;
    gap: 0.5rem;
  }
}
</style>
