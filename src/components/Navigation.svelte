<script>
  import { Navigate } from "svelte-router-spa";
</script>

<style>
  nav {
    position: fixed;
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
</style>

<nav>
  <ul>
    <li>
      <Navigate to="/">Home</Navigate>
    </li>
    <li>
      <Navigate to="/weight">Weight</Navigate>
    </li>
    <li>
      <Navigate to="/overview">Overview</Navigate>
    </li>
    <li>
      <Navigate to="/overview">Dogs</Navigate>
    </li>
  </ul>
</nav>
