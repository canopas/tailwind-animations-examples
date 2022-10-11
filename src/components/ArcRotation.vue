<template>
  <div>
    <div
      class="
        center
        h-36
        w-36
        border-4 border-x-pink-600 border-y-pink-100
        animate-spin
      "
    >
      <div class="center h-24 w-24 bg-white">
        <div class="h-12 w-12 rounded-full bg-green-200 animate-zoom-in"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.center {
  @apply rounded-full flex justify-center items-center;
}
</style>

