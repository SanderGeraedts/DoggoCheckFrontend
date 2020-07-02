<script>
  import { Navigate, routeIsActive } from "svelte-router-spa";

  import DogIcon from "./DogIcon.svelte";
  import GraphIcon from "./GraphIcon.svelte";
  import HomeIcon from "./HomeIcon.svelte";
  import WeightIcon from "./WeightIcon.svelte";

  const getActiveColor = route => {
    return routeIsActive(route) ? "fd5621" : "ffffff";
  };
</script>

<style>
  nav {
    position: fixed;
    background-color: #323232;
    bottom: 0;
    width: 100vw;
    height: 100px;
  }

  nav ul {
    display: flex;
    justify-content: space-evenly;
    margin: 0;
    padding: 0;
    list-style: none;
    height: 100%;
  }

  nav ul li {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  nav :global(.nav-link) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    text-align: center;
    transition: color 0.1s ease-in-out;
    text-decoration: none;
    color: var(--color-white);
    font-family: var(--font-heading);
  }

  nav ul li :global(svg) {
    margin: 0 auto;
    padding: 5px 0;
  }

  nav :global(.nav-link.active) {
    color: var(--color-headings);
  }
</style>

<nav>
  <ul>
    <li>
      <Navigate styles="nav-link" to="/">
        <HomeIcon color={getActiveColor('/')} />
        Home
      </Navigate>
    </li>
    <li>
      <Navigate styles="nav-link" to="weight">
        <WeightIcon color={getActiveColor('weight')} />
        Weight
      </Navigate>
    </li>
    <li>
      <Navigate styles="nav-link" to="overview">
        <GraphIcon color={getActiveColor('overview')} />
        Overview
      </Navigate>
    </li>
    <li>
      <Navigate styles="nav-link" to="dogs">
        <DogIcon color={getActiveColor('dogs')} />
        Dogs
      </Navigate>
    </li>
  </ul>
</nav>
