<script>
  import "../app.css";
  import { onMount } from "svelte";
  import { doc_height } from "$lib/stores/doc_height.js";
  import { window_height } from "$lib/stores/window_height.js";
  import {det_doc_height} from "$lib/functions/dimension_helpers.js"
  import Header from "../lib/Header.svelte";
  import Footer from "../lib/Footer.svelte";

  let innerHeight;

  onMount(async () => {

    doc_height.set(det_doc_height(document));

    window_height.set(innerHeight);
  });

</script>

<svelte:head>
  <title>Jonas Stettner</title>
  <link rel="icon" type="image/svg" href="fav.svg" />
</svelte:head>

<svelte:window bind:innerHeight />

<Header />

<slot />

<Footer />
