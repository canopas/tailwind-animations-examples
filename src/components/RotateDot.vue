<template>
  <div>
    <div class="rotate h-16 w-16 border border-pink-300">
      <div class="rotate h-4 w-4 bg-pink-600 animate-circle"></div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.rotate {
  @apply absolute inset-0 m-auto rounded-full;
}
</style>