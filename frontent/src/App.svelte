<script>
  import Layout from "./components/layout/Layout.svelte";
  import SearchInput from "./components/SearchInput.svelte";
</script>

<style lang="scss">
  .welcome-container {
    width: 400px;

    h1 {
      font-size: 28px;
    }

    p {
      font-size: 16px;
    }
  }
</style>

<Layout>
  <div class="flex flex-col items-center h-full gap-8 pt-40">
    <div class="welcome-container text-center">
      <h1 class="font-semibold">Welcome to GameRec</h1>
      <p class="text-body-1">
        Use our game recommendation tool to discover new games. Type one of your
        favorite games:
      </p>
    </div>

    <SearchInput />
  </div>
</Layout>
