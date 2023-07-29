<script lang="ts">
  import { Rive } from "@rive-app/canvas";
  import { onMount } from "svelte";

  onMount(() => {
    let r = new Rive({
      src: "/intro.riv",
      autoplay: true,
      artboard: "Blobs",
      stateMachines: "Animation",
      canvas: document.getElementById("introCanvas") as HTMLCanvasElement,
      onLoad: () => {
        r.resizeDrawingSurfaceToCanvas();
      },
    });
  });
</script>

<canvas id="introCanvas" width="300" height="300" />
asdfdas
