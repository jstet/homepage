<script>
    import HomeIcon from "./icons/HomeIcon.svelte";
    import { header_height } from "$lib/stores/header_height.js";
    import { doc_height } from "$lib/stores/doc_height.js";
    import { onMount } from "svelte";

    let progress_bar;
    let scrolled = 0;

    let clientHeight;

    function handler() {
        var winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
        scrolled = (winScroll / $doc_height) * 100;

        // console.log(winScroll, scrolled, $doc_height)
    }
    onMount(async () => {
        header_height.set(clientHeight);
    });

    
</script>

<svelte:window on:scroll={handler} />

<nav
    class="text-centerlg:py-5 bg-neutral-100 lg:bg-transparent fixed top-0 w-full grid lg:grid-cols-3 z-20"
    bind:clientHeight
>
    <div class="hidden lg:block h-full" />

    <div class="lg:bg-white py-4 ">
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
                class="progress-bar bg-emerald-400 h-2 rounded-full"
                style="width: {scrolled}%;"
                bind:this={progress_bar}
            />
        </div>
    </div>
    <div class="hidden lg:block lg:bg-white" />
</nav>
