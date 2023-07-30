<script lang="ts">
  import { Layout, Rive, Fit, Alignment } from "@rive-app/canvas";
  import { onMount } from "svelte";

  onMount(() => {
    const introCanvas: HTMLCanvasElement = document.getElementById(
      "introCanvas"
    ) as HTMLCanvasElement;

    let r: Rive = new Rive({
      src: "/intro.riv",
      autoplay: true,
      layout: new Layout({
        fit: Fit.Cover,
        alignment: Alignment.Center,
      }),
      artboard: "New Artboard",
      stateMachines: "Animation",
      canvas: introCanvas,
      onLoad: () => {
        r.resizeDrawingSurfaceToCanvas();
      },
    });
  });
</script>

<svelte:head>
  <title>Home - Apricitine</title>
</svelte:head>

<canvas id="introCanvas" />

<style lang="scss">
  canvas#introCanvas {
    width: 100%;
    height: 100vh;
    display: block;
  }
</style>
