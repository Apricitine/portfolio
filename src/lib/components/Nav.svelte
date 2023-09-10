<script lang="ts">
  import { onMount } from "svelte";
</script>

<nav>
  <div id="full-nav">
    <a href="javascript:void">ABOUT</a>
    <a href="javascript:void">PROJECTS</a>
    <a href="javascript:void">CONTACT</a>
    <a href="javascript:void">CREDIT</a>
  </div>
</nav>

<style lang="scss">
  $flex-padding: 30%;

  nav {
    position: fixed;
    z-index: 10;
    font-family: "Mulish";
    font-weight: 700;
    color: white;
    width: 12%;

    div {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      align-items: center;
      transform: translateX(-50%);
      opacity: 0;
      transition: all 0.25s ease;

      a {
        color: inherit;
        font-weight: inherit;
        text-decoration: none;
        text-shadow: 1px 1px 5px white;
        transition: all 3s ease;
        padding: $flex-padding 0 $flex-padding 0;
      }
    }
  }

  nav:hover div#full-nav {
    transform: translateX(25%);
    opacity: 1;
  }
</style>
