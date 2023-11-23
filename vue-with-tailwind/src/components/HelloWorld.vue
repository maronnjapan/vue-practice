<script setup lang="ts">
withDefaults(defineProps<{ heightNum: number }>(), { heightNum: 16 })
</script>

<template>
  <div class="border-2" :class="`h-${heightNum}`" data-test-id="test-id">
    <p>テスト</p>
  </div>
</template>


