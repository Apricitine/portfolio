<script lang="ts">
  import { onMount } from "svelte";

  onMount(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let interval = null;

    document.querySelector("h1").onmouseover = (event) => {
      let iteration = 0;

      clearInterval(interval);

      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return event.target.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= event.target.dataset.value.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    };
  });
</script>

<h1 data-value="Apricitine">Apricitine</h1>

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

  h1 {
    color: white;
    margin: 0;
    font-family: "DM Mono";
    font-size: 5rem;
    animation: fadeIn ease 3s;
    text-shadow: 0px 0px 20px rgb(240, 56, 179);
  }
</style>
