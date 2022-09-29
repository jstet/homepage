<script>
    import "../app.css";
    import Header from "../lib/Header.svelte";
    import Footer from "../lib/Footer.svelte";
    import SideArt from "../lib/SideArt.svelte";
</script>

<svelte:head>
    <title>Jonas Stettner</title>
  <link rel="icon" type="image/svg" href="fav.svg" />
</svelte:head>

<SideArt />
<Header />

<slot />

<Footer />