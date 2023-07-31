<script lang="ts">
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
      setTimeout(() => readyToMountMain = true, 6000);
    });

  });
  setInterval(() => console.log(`outside ${readyToMountMain}`), 1000);
</script>

<svelte:head>
  <title>Home - Apricitine</title>
</svelte:head>

<canvas id="introCanvas" />
{#if readyToMountMain}
<main>
  <h1>Apricitine</h1>
</main>
{/if}

<style lang="scss">
  canvas#introCanvas {
    position: absolute;
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

    h1 {
      color: white;
      margin: 0;
      font-family: "DM Mono";
      font-size: 5rem;
    }
  }
</style>
