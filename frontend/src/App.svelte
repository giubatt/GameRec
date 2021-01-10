<script>
  import Home from "./pages/Home.svelte";

  import { QueryClient, QueryClientProvider } from "@sveltestack/svelte-query";
  const queryClient = new QueryClient();
</script>

<QueryClientProvider client={queryClient}>
  <Home />
</QueryClientProvider>
