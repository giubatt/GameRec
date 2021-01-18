<script>
  export let id = "";
  import { useQuery } from "@sveltestack/svelte-query";
  import { getGame } from "../api/games";
  import CartIcon from "../icons/cart.svg";

  const queryResult = useQuery(["getGame", id], () => getGame(id));

  let name;
  let storeUrl;
  let gameUrl;

  $: name = $queryResult?.data?.name ?? "";
  $: storeUrl = $queryResult?.data?.stores?.[0]?.store?.domain ?? "";
  $: gameUrl = $queryResult?.data?.slug ?? "";
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
    }
  }

  tr:not(:last-child) {
    border-bottom: 1px solid #eaeced;
  }
</style>

<tr>
  <td class="name"><a href={`https://igdb.com/games/${gameUrl}`}>{name}</a></td>
  <td class="store">
    <a href={`https://${storeUrl}`}><CartIcon /></a>
  </td>
</tr>
