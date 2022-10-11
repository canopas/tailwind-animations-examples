<script setup lang="ts">
import ProgressDots from "./components/ProgressDots.vue";
import RotateDot from "./components/RotateDot.vue";
import ThreeBounce from "./components/ThreeBounce.vue";
import RotateTwoDots from "./components/RotateTwoDots.vue";
</script>

<template>
  <div class="h-screen my-20 flex flex-nowrap">
    <ProgressDots class="wrapper" />
    <RotateDot class="relative wrapper" />
    <ThreeBounce class="wrapper" />
    <RotateTwoDots class="wrapper" />
  </div>
</template>


<style scoped lang="postcss">
.wrapper {
  @apply flex gap-4 h-64 w-64 bg-pink-100 items-center justify-center m-4 ;
}
</style>