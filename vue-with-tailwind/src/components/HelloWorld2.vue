<script setup lang="ts">
withDefaults(defineProps<{ heightNum: number }>(), { heightNum: 16 })
</script>

<template>
  <div class="border-2" :class="`h-${heightNum}`">
    <p>テストコピー</p>
  </div>
</template>


