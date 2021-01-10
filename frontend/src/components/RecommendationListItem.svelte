<script>
  export let id = "";
  import { useQuery } from "@sveltestack/svelte-query";
  import { getGame } from "../api/games";
  import CartIcon from "../icons/cart.svg";

  const queryResult = useQuery(["getGame", id], () => getGame(id));

  let name;
  let metacriticScore;
  let storeUrl;

  $: name = $queryResult?.data?.name ?? "";
  $: metacriticScore = $queryResult?.data?.metacritic ?? "";
  $: storeUrl = $queryResult?.data?.stores?.[0]?.store?.domain ?? "";
</script>

<style lang="scss">
  tr {
    height: 50px;

    td {
      padding: 18px;

      &.name {
        width: 100%;
        font-size: 18px;

        color: #f28b30;
      }

      &.score {
        font-weight: 500;
        font-size: 18px;
        text-align: center;

        color: #a5abb1;
      }
    }
  }

  tr:not(:last-child) {
    border-bottom: 1px solid #eaeced;
  }
</style>

<tr>
  <td class="name">{name}</td>
  <td class="score">{metacriticScore}</td>
  <td class="store">
    <a href={`https://${storeUrl}`}><CartIcon /></a>
  </td>
</tr>
