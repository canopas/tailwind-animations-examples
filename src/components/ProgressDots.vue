<template>
  <div>
    <div class="progress"></div>
    <div class="progress"></div>
    <div class="progress"></div>
  </div>
</template>

<style scoped lang="postcss">
.progress {
  @apply h-8 w-8 bg-pink-600 rounded-full animate-progress;
}

.progress:nth-child(1) {
  animation-delay: 0.1s;
}

.progress:nth-child(2) {
  animation-delay: 0.3s;
}

.progress:nth-child(3) {
  animation-delay: 0.5s;
}
</style>

