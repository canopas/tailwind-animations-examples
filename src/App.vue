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
import DoubleBouncyCircles from "./components/DoubleBouncyCircles.vue";
import BouncyCircles from "./components/BouncyCircles.vue";
import DottedSquare from "./components/DottedSquare.vue";
import ForwardingArrow from "./components/ForwardingArrow.vue";
import RotatingSquares from "./components/RotatingSquares.vue";
import LineWaves from "./components/LineWaves.vue";
import TriangleSwappingDots from "./components/TriangleSwappingDots.vue";
</script>

<template>
  <div class="flex flex-wrap m-16">
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
    <DoubleBouncyCircles class="wrapper" />
    <BouncyCircles class="wrapper" />
    <DottedSquare class="wrapper" />
    <ForwardingArrow class="wrapper" />
    <RotatingSquares class="wrapper" />
    <LineWaves class="wrapper" />
    <TriangleSwappingDots class="wrapper" />
  </div>
</template>

<style scoped lang="postcss">
.wrapper {
  @apply relative flex gap-4 h-64 w-64 bg-pink-100 items-center justify-center m-4;
}
</style>
