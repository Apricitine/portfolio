<script lang="ts">
  import { onMount } from "svelte";
  import skibbity from "$lib/utilities/skibbity";
  import glowies from "$lib/utilities/glowies";

  onMount(() => {
    skibbity("span", "APRICITINE!@#$%^&*()");
    glowies("blob");
  });
</script>

<section>
  <div id="blob" />
  <div id="blur" />
  <h1>
    [&nbsp;&nbsp;<span data-value="Apricitine">Apricitine</span>&nbsp;&nbsp;]
  </h1>
</section>

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
  @keyframes rotate {
    from {
      rotate: 0deg;
    }

    50% {
      scale: 1 1.5;
    }

    to {
      rotate: 360deg;
    }
  }
  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  section {
    position: relative;
    display: grid;
    place-items: center;
    overflow: hidden;
    height: 100vh;
    width: 100vw;

    h1 {
      color: white;
      margin: 0;
      font-family: "DM Mono";
      font-size: 5rem;
      animation: fadeIn ease 3s;
      text-shadow: 0px 0px 20px rgb(240, 56, 179);
      z-index: 3;
    }

    #blob {
      background-color: white;
      height: 26vmax;
      aspect-ratio: 1;
      position: absolute;
      left: 50%;
      top: 50%;
      translate: -50% -50%;
      border-radius: 50%;
      background: linear-gradient(
        to right,
        rgb(238, 39, 162),
        rgb(27, 224, 238)
      );
      animation: rotate 20s infinite;
      animation: fade 3s ease;
      opacity: 0.8;
    }

    #blur {
      height: 100%;
      width: 100%;
      position: absolute;
      z-index: 2;
      backdrop-filter: blur(12vmax);
    }
  }
</style>
