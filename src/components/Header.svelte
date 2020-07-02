<script>
  import { Navigate } from "svelte-router-spa";
  import { Wrapper } from "./index";
</script>

<style>
  header {
    background-color: var(--color-header);
  }

  /* global is a work-around to style the Navigate from svelte-router-spa */
  header :global(.logo) {
    color: var(--color-logo);
    font-family: var(--font-heading);
    text-decoration: none;
    font-size: 32px;
  }
</style>

<header>
  <Wrapper>
    <Navigate styles="logo" to="/">DoggoCheck!</Navigate>
  </Wrapper>
</header>
