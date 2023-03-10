<script>
    import HomeIcon from "./icons/HomeIcon.svelte";
    import { window_dims, dims } from "$lib/stores/dimensions.js";
    import { scrolled } from "$lib/stores/scrolled.js";

    let progress_bar;

    let clientHeight;

    function handler() {
        var winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
        $scrolled = (winScroll / ($dims.doc_height - $window_dims.window_height)) * 100;
    }
   
</script>

<svelte:window on:scroll={handler} />

<nav
    class="bg-neutral-100 lg:bg-white fixed top-0 w-full grid lg:grid-cols-3 lg:z-20 z-30" style="height: {$dims.header_height}px;"
    bind:clientHeight
>
    <div class="hidden lg:block h-full" />

    <div class="flex flex-col items-center justify-center">
        <span class="flex items-center justify-center lg:mt-4">
            <HomeIcon cl="h-9 w-9 mr-3" />
            <h1 class="font-bold text-xl lg:text-2xl tracking-tight ">
                Jonas Stettner
            </h1>
        </span>
        <div
            class="bg-neutral-100 progress-container mt-4 m-auto w-3/6 h-2 rounded-full hidden lg:block"
        >
            <div
                class="progress-bar bg-emerald-400 h-2 rounded-full"
                style="width: {$scrolled}%;"
                bind:this={progress_bar}
            />
        </div>
    </div>
    <div class="hidden lg:block lg:bg-white" />
</nav>
