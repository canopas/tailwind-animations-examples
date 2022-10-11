<template>
  <div>
    <div class="bounce"></div>
    <div class="bounce"></div>
    <div class="bounce"></div>
  </div>
</template>

<style scoped lang="postcss">
.bounce {
  @apply h-4 w-4 bg-pink-600 rounded-full animate-three-bounce;
}

.bounce:nth-child(1) {
  animation-delay: 0.1s;
}

.bounce:nth-child(2) {
  animation-delay: 0.3s;
}

.bounce:nth-child(3) {
  animation-delay: 0.5s;
}
</style>