<script>
  import RecommendationListItem from "./RecommendationListItem.svelte";

  export let ids = [];
</script>

<style lang="scss">
  table {
    width: 700px;

    th {
      padding: 8px 16px;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;

      color: #656565;

      &.name {
        text-align: left;
      }
    }

    tbody {
      box-shadow: 0 0 0 1px #eaeced;
      border-radius: 10px;
    }
  }
</style>

<table class="my-10">
  <thead>
    <tr>
      <th class="name">Title</th>
      <th class="score">Score</th>
      <th />
    </tr>
  </thead>
  <tbody>
    {#each ids as id}
      <RecommendationListItem {id} />
    {/each}
  </tbody>
</table>
