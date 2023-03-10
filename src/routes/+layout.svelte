<script>
    import "../app.css";
    import { onMount } from "svelte";
    import { window_dims, dims } from "$lib/stores/dimensions.js";
    import Header from "../lib/Header.svelte";
    import Footer from "../lib/Footer.svelte";
    import Loader from "../lib/Loader.svelte";
  
    let innerHeight;
    let outerWidth;
  
    let loaded = false;
  
    $: $window_dims.window_height = innerHeight;
    $: $window_dims.window_width = outerWidth;
  
    onMount(async () => {
      loaded = true;
    });
  </script>
  
  <svelte:head>
    <title>Jonas Stettner</title>
  </svelte:head>
  
  <svelte:window bind:innerHeight bind:outerWidth />
  
  {#if loaded}
    <Header />
    <slot />
    <Footer />
  {:else}
    <Loader />
  {/if}
  