<script>
    import "../app.css";
    import Header from "../lib/Header.svelte";
    import Footer from "../lib/Footer.svelte";
    import SideArt from "../lib/SideArt.svelte";
</script>

<svelte:head>
  <link rel="icon" type="image/svg" href="favicon.svg" />
</svelte:head>

<SideArt />
<Header />

<slot />

<Footer />