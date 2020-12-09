<script>
  import TrashIcon from "../icons/trash.svg";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let id = "";
  $: console.log({ id });

  let name = "TerraNova (1900)";
  let imageUrl =
    "https://images.igdb.com/igdb/image/upload/t_cover_big/ndfzbf3xvuuchijx7v1c.jpg";
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
  <span class="game-image"><img src={imageUrl} alt="cover art" /></span>
  <span class="game-name">{name}</span>
  <button on:click={() => dispatch('remove')}><TrashIcon
      class="icon" /></button>
</div>
