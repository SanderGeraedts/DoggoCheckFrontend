<script>
  import { Route } from "svelte-router-spa";
  import { Header, Wrapper, Navigation } from "../components";

  export let currentRoute;
  const params = {};
</script>

<style>

</style>

<Header />
<Wrapper>
  <Route {currentRoute} {params} />
</Wrapper>
<Navigation />
