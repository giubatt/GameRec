<script>
  import Layout from "../components/layout/Layout.svelte";
  import SearchInput from "../components/SearchInput.svelte";
  import SelectedGame from "../components/SelectedGame.svelte";

  let selectedGames = [1, 6];
  $: console.log({ selectedGames });
</script>

<style lang="scss">
  h1 {
    font-size: 28px;
  }

  .welcome-container {
    width: 400px;

    p {
      font-size: 16px;
    }
  }

  .add-more-text {
    width: 400px;
    text-align: center;
  }
</style>

<Layout>
  <div class="flex flex-col items-center h-full gap-8">
    {#if selectedGames.length === 0}
      <div class="welcome-container text-center pt-40">
        <h1 class="font-semibold">Welcome to GameRec</h1>
        <p class="text-body-1">
          Use our game recommendation tool to discover new games. Type one of
          your favorite games:
        </p>
      </div>

      <SearchInput
        on:selected={(event) => (selectedGames = [...selectedGames, event.detail.id])} />
    {:else}
      <div class="flex flex-col items-center gap-4 pt-10 pb-10">
        <h1 class="font-semibold">Success!</h1>
        {#each selectedGames as gameId}
          <SelectedGame id={gameId} />
        {/each}
      </div>
      <button>Get Recomendations</button>
      <p class="add-more-text text-body-1">
        You can add more titles to receive more accurate recommendations or
        continue to see a list of recommended games
      </p>
      <SearchInput
        on:selected={(event) => (selectedGames = [...selectedGames, event.detail.id])} />
    {/if}
  </div>
</Layout>
