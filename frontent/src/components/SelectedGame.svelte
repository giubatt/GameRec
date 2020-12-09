<script>
  export let id = "";
  $: console.log({ id });

  let name = "TerraNova (1900)";
  let imageUrl =
    "https://images.igdb.com/igdb/image/upload/t_cover_big/ndfzbf3xvuuchijx7v1c.jpg";
</script>

<style lang="scss">
  .selected-game {
    display: grid;
    grid-template-columns: 38px 1fr;
    gap: 12px;
    height: 50px;
    width: 700px;
    padding: 0 25px;
    align-items: center;
    background-color: #dfdfe0;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    // .game-image {
    // }

    .game-name {
      font-size: 16px;
      color: #656565;
    }
  }
</style>

<div class="selected-game">
  <span class="game-image"><img src={imageUrl} alt="cover art" /></span>
  <span class="game-name">{name}</span>
</div>
