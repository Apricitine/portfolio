<svelte:head>
  <link rel="icon" href="/favicon.png" /><link
    rel="preconnect"
    href="https://fonts.googleapis.com"
  />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@500&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<main>
  <slot />
</main>

<style lang="scss">
  main {
    margin: 0;
    padding: 0;
  }
</style>
