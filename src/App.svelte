<script>
  // @ts-nocheck
  import backend from "./server.js";
  import HomePage from "./pages/HomePage.svelte";
  import { onMount } from "svelte";






  onMount(async() => {
    
  });



</script>

<div class="main-wrapper">
  <HomePage
  ></HomePage>
</div>



<style>
  @media only screen and (max-width: 1199px) {
  }
  @media only screen and (min-width: 1200px) {
    .main-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
</style>
