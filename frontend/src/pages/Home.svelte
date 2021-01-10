<script>
  import Layout from "../components/layout/Layout.svelte";
  import SearchInput from "../components/SearchInput.svelte";
  import SelectedGame from "../components/SelectedGame.svelte";
  import PlayIcon from "../icons/play.svg";

  let selectedGames = [];

  import { useMutation } from "@sveltestack/svelte-query";
  import { getRecommendation } from "../api/games";
  import RecommendationList from "../components/RecommendationList.svelte";

  // Queries
  const mutation = useMutation((recGameId) => getRecommendation(recGameId));
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

  // .add-more-text {
  //   width: 400px;
  //   text-align: center;
  // }

  .cta-button {
    display: flex;
    height: 40px;
    width: 300px;
    background-color: #8cc713;
    border-radius: 20px;

    justify-content: center;
    align-items: center;

    color: white;
    font-weight: 800;
    font-size: 13px;
    gap: 8px;
    letter-spacing: 2px;
    text-transform: uppercase;
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
          <SelectedGame
            id={gameId}
            on:remove={() => {
              selectedGames = selectedGames.filter((id) => id !== gameId);
              $mutation.reset();
            }} />
        {/each}
      </div>
      <button
        class="cta-button"
        on:click={() => {
          $mutation.mutate(selectedGames[0]);
        }}><PlayIcon class="icon" />Get Recomendations</button>
      <!-- <p class="add-more-text text-body-1">
        You can add more titles to receive more accurate recommendations or
        continue to see a list of recommended games
      </p>
      <SearchInput
        on:selected={(event) => (selectedGames = [...selectedGames, event.detail.id])} /> -->
      {#if $mutation.isLoading}
        Loading...
      {:else if $mutation.status === 'success'}
        <RecommendationList ids={$mutation?.data?.ids} />
      {:else if $mutation.status === 'error'}Error getting recommendation{/if}
    {/if}
  </div>
</Layout>
