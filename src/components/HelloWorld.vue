<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1 class="text-white">{{ msg }}</h1>

  <div class="text-white">
    <button
      type="button"
      class="my-4 rounded-lg bg-indigo-500 px-6 py-2.5 text-white shadow-md shadow-indigo-500/20 transition-colors hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/30 active:bg-indigo-700"
      @click="count++"
    >
      点击次数: {{ count }}
    </button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
