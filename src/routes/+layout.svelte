<script>
  import "../app.css";
  import { onMount } from "svelte";
  import { window_height } from "$lib/stores/window_height.js";
  import { window_width } from "$lib/stores/window_width.js";
  import Header from "../lib/Header.svelte";
  import Footer from "../lib/Footer.svelte";
  import Loader from "../lib/Loader.svelte";

  let innerHeight;
  let outerWidth;

  let loaded = false;

  onMount(async () => {
    $window_height = innerHeight;
    $window_width = outerWidth;
    loaded = true;
  });
</script>

<svelte:head>
  <title>Jonas Stettner</title>
  <link rel="icon" type="image/svg" href="fav.svg" />
</svelte:head>

<svelte:window bind:innerHeight bind:outerWidth />

{#if loaded}
  <Header />
  <slot />
  <Footer />
{:else}
  <Loader />
{/if}
