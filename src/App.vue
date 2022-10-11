<script setup>
import ProgressDots from "./components/ProgressDots.vue";
import RotateDot from "./components/RotateDot.vue";
import ThreeBounce from "./components/ThreeBounce.vue";
import RotateTwoDots from "./components/RotateTwoDots.vue";
import SquareFill from "./components/SquareFill.vue";
import RotateSquare from "./components/RotateSquare.vue";
import JumpingHeart from "./components/JumpingHeart.vue";
import RotateCircle from "./components/RotateCircle.vue";
import ArcRotation from "./components/ArcRotation.vue";
import Clock from "./components/Clock.vue";
import Wave from "./components/Wave.vue";
import TwinCircle from "./components/TwinCircle.vue";
import Pacman from "./components/Pacman.vue";
</script>

<template>
  <div class="h-screen my-20 flex flex-wrap container m-16">
    <RotateSquare class="wrapper" />
    <ProgressDots class="wrapper" />
    <JumpingHeart class="wrapper" />
    <RotateDot class="wrapper" />
    <Pacman class="wrapper" />
    <ThreeBounce class="wrapper" />
    <ArcRotation class="wrapper" />
    <RotateTwoDots class="wrapper" />
    <SquareFill class="wrapper" />
    <Clock class="wrapper" />
    <RotateCircle class="wrapper" />
    <Wave class="wrapper" />
    <TwinCircle class="wrapper" />
  </div>
</template>


<style scoped lang="postcss">
.wrapper {
  @apply relative flex gap-2 h-64 w-64 bg-pink-100 items-center justify-center m-4;
}
</style>