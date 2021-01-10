<script>
  import TrashIcon from "../icons/trash.svg";
  import { createEventDispatcher } from "svelte";
  import { useQuery } from "@sveltestack/svelte-query";
  import { getGame } from "../api/games";

  const dispatch = createEventDispatcher();

  export let id = "";

  const queryResult = useQuery(["getGame", id], () => getGame(id));
  // $: console.log($queryResult);

  let name;
  let imageUrl;
  $: name = $queryResult?.data?.name ?? "Loading...";
  $: imageUrl = $queryResult?.data?.background_image ?? "";
</script>

<style lang="scss">
  .selected-game {
    display: grid;
    grid-template-columns: 38px 1fr auto;
    gap: 12px;
    height: 50px;
    width: 700px;
    padding-left: 25px;
    align-items: center;
    background-color: #dfdfe0;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    // .game-image {
    // }

    .game-name {
      font-size: 16px;
      color: #656565;
    }

    button {
      padding: 16px;
      color: #a5abb1;
    }
  }
</style>

<div class="selected-game">
  <span class="game-image">
    {#if imageUrl}<img src={imageUrl} alt="cover art" />{/if}
  </span>
  <span class="game-name">{name}</span>
  <button on:click={() => dispatch('remove')}><TrashIcon
      class="icon" /></button>
</div>
