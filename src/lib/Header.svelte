<script>
    import HomeIcon from "./Icons/HomeIcon.svelte";

    let progress_bar;
    let scrollY = 0;
    let outerHeight

    function handler() {
        progress_bar.style.width = (scrollY/outerHeight) * 100 + "%";
    }
</script>

<svelte:window on:scroll={handler} bind:scrollY bind:outerHeight/>

<nav
    class="text-centerlg:py-5 bg-neutral-100 lg:bg-transparent z-0 sticky top-0 w-full grid lg:grid-cols-3"
>
    <div class="hidden lg:block h-full" />

    <div class="bg-white py-4 ">
        <span class="flex items-center justify-center">
            <HomeIcon cl="h-9 w-9 mr-3" />
            <h1 class="font-bold text-xl lg:text-2xl tracking-tight ">
                Jonas Stettner
            </h1>
        </span>
        <div
            class="progress-container mt-4 m-auto w-3/6 h-2 rounded-full bg-neutral-100 hidden lg:block"
        >
            <div
                class="progress-bar bg-emerald-400 h-2 rounded-full w-0"
                bind:this={progress_bar}
            />
        </div>
    </div>
    <div class="hidden lg:block bg-white" />
</nav>

