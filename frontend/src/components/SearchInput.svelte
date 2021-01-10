<script>
  import { createEventDispatcher } from "svelte";
  import SearchIcon from "../icons/search.svg";
  import CloseIcon from "../icons/close.svg";
  import { getGames } from "../api/games";

  const dispatch = createEventDispatcher();

  let timer;
  let value = "";
  let debouncedValue;
  let items = Array(0);
  let loading = false;

  $: debounce(value);
  $: getAutocomplete(debouncedValue);

  function clearInput() {
    clearTimeout(timer);
    value = "";
  }

  const debounce = (value) => {
    loading = true;
    clearTimeout(timer);
    timer = setTimeout(() => {
      debouncedValue = value;
    }, 500);
  };

  const selectGame = (id) => {
    dispatch("selected", { id });
    value = "";
  };

  async function getAutocomplete(query) {
    if (query) {
      items = [];
      loading = true;
      const games = await getGames(query);
      items = games;
      loading = false;
    }
  }
</script>

<style lang="scss">
  .search-input {
    display: flex;
    align-items: center;
    width: 700px;
    height: 50px;
    padding: 8px 12px 8px 24px;

    background: #dfdfe0;
    border: 1px solid #a5abb1;
    border-radius: 25px;

    &.active {
      background: transparent;
      border-radius: 25px 25px 0 0;

      input {
        background: transparent;
      }
    }

    .divider-vertical {
      height: auto;
      width: 1px;
      background-color: #a5abb1;
      align-self: stretch;
    }

    form {
      display: flex;
      flex-grow: 1;

      input {
        flex-grow: 1;
        height: 100%;
        font-size: 18px;
        color: #656565;
        background: #dfdfe0;
        outline: none;
      }
    }

    button {
      color: #a5abb1;
    }
  }

  .search-results {
    width: 700px;
    border: 1px solid #a5abb1;
    border-top: none;
    border-radius: 0 0 25px 25px;

    .empty {
      padding: 20px 75px;
      color: #f23030;
    }

    .list {
      :nth-child(1) {
        background-color: #dfdfe0;
      }
      &:hover {
        :nth-child(1) {
          background-color: unset;
        }
      }

      .list-item {
        display: grid;
        grid-template-columns: 38px 1fr;
        gap: 12px;
        height: 70px;
        padding: 10px 25px;
        align-items: center;

        &:hover {
          background-color: #dfdfe0;
        }

        .item-image {
        }

        .item-name {
          font-size: 16px;
          color: #656565;
        }
      }
    }

    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;

      border-top: 1px solid #a5abb1;
      padding: 6px 6px 6px 25px;
      color: #f28b30;

      button {
        height: 38px;
        padding: 8px 16px;
        background-color: #f28b30;
        border-radius: 19px;
        color: white;
        font-size: 16px;
        font-weight: 400;
      }
    }
  }
</style>

<div>
  <div class="search-input" class:active={!!value}>
    <form on:submit|preventDefault={() => selectGame(items[0]?.id)}>
      <input type="text" placeholder="Search..." bind:value />
      <button type="submit" style={{ display: 'none' }} />
    </form>
    <span class="flex items-center gap-2">
      {#if !!value}
        <button on:click={clearInput}><CloseIcon class="icon" /></button>
      {/if}
      <hr class="divider-vertical" />
      <button><SearchIcon class="icon" /></button>
    </span>
  </div>

  {#if !!value}
    <div class="search-results">
      {#if loading}
        <div class="empty">Loading...</div>
      {:else if items.length}
        <div class="list">
          {#each items as item}
            <div class="list-item" on:click={() => selectGame(item?.id)}>
              <span class="item-image">
                <img src={item?.background_image} alt="cover art" />
              </span>
              <span class="item-name">{item?.name}</span>
            </div>
          {/each}
        </div>
      {:else}
        <div class="empty">Sorry, there are no results!</div>
      {/if}
      <div class="footer">
        <span>
          {#if items.length}
            <a href="#results">See all results for <i>{value}</i></a>
          {/if}
        </span>
        <button>Advanced Search</button>
      </div>
    </div>
  {/if}
</div>
