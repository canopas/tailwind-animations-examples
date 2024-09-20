<template>
  <div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
</template>

<style scoped lang="postcss">
.line {
  @apply h-10 w-2 bg-pink-600 rounded-sm animate-line-wave;
}

.line:nth-child(1) {
  animation-delay: 0.1s;
}

.line:nth-child(2) {
  animation-delay: 0.3s;
}

.line:nth-child(3) {
  animation-delay: 0.5s;
}

.line:nth-child(4) {
  animation-delay: 0.7s;
}

.line:nth-child(5) {
  animation-delay: 0.9s;
}
</style>