<script lang="ts">
  import ApricitineTitle from "$lib/components/ApricitineTitle.svelte";
  import Nav from "$lib/components/Nav.svelte";
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
    localStorage.setItem("hasVisited", JSON.stringify(true));
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
  <div id="nav-wrapper">
    <Nav />
  </div>
  <section id="title">
    <ApricitineTitle />
  </section>
  <section id="main-content">
    <div id="content-area">
      <h1>Hiiiiiiii!!!</h1>
      <p>
        I'm Apricitine, and I'm a web dev with 3 years of experience designing
        UIs. I have quite a bit of knowledge in general purpose programming and
        am a mechanist and programmer on the La Canada Engineering Club's 21525
        and 2429 robotics teams.
      </p>
    </div>
  </section>
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

  section#title {
    z-index: 1;
    background: transparent;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  section#main-content {
    color: white;
    display: flex;
    justify-content: center;

    div#content-area {
      width: 75%;
      font-family: "Mulish";

      h1 {
        font-family: "DM Mono";
        font-size: 5rem;
      }
    }
  }

  #nav-wrapper {
    height: 100vh;
    display: flex;
    align-items: center;
    position: absolute;
  }
</style>
