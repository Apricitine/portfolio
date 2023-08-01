<script lang="ts">
  import ApricitineTitle from "$lib/components/ApricitineTitle.svelte";
  import { Layout, Rive, Fit, Alignment } from "@rive-app/canvas";
  import { onMount } from "svelte";

  let readyToMountMain: boolean;

  onMount(async () => {
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

    document.addEventListener("click", () => {
      setTimeout(() => (readyToMountMain = true), 6000);
    });
  });
</script>

<svelte:head>
  <title>Home - Apricitine</title>
</svelte:head>

<canvas id="introCanvas" />
{#if readyToMountMain}
  <main>
    <ApricitineTitle />
  </main>
{/if}

<style lang="scss">
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translate(0, 5vh);
    }
    100% {
      opacity: 1;
      top: 0%;
      transform: translate(0, 0);
    }
  }

  canvas#introCanvas {
    position: fixed;
    width: 100%;
    height: 100vh;
    display: block;
    z-index: -1;
  }

  main {
    z-index: 1;
    background: transparent;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
