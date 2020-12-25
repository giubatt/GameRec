<script>
  import Header from "./Header.svelte";
</script>

<style>
  .layout-container {
    display: grid;
    grid-template-rows: auto 1fr;
  }
</style>

<div class="layout-container grid h-screen">
  <Header />

  <div>
    <slot />
  </div>
</div>
