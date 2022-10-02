<script>
    import IndexDataViz from "./svg/IndexDataViz.svelte";
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";
    import { scrolled } from "$lib/stores/scrolled.js";
    import { header_height } from "$lib/stores/header_height.js";
    import { sub_header_height } from "$lib/stores/sub_header_height.js";

    let clientHeight;

    onMount(async () => {
        sub_header_height.set(clientHeight);
    });
</script>

<div
    bind:clientHeight
    class=" bg-neutral-100 w-full  lg:fixed lg:z-30"
    id="sub_header"
    style="margin-top: {$header_height}px; "
>
    <div class="lg:relative" style="right: {$scrolled}%;">
        <div class="grid grid-rows-2 lg:grid-cols-2 lg:h-52 ">
            <div class="lg:h-52 flex items-center justify-center">
                <div class="lg:p-0 py-6 w-32">
                    <img src="media/me.jpeg" class="rounded-full" alt="" />
                </div>
            </div>
            <div class="lg:h-52 lg:flex items-center ">
                <span class="text-center lg:text-left px-4 prose lg:prose-lg">
                    <h3 class="leading-3">Graduate Student</h3>
                    <h5 class=" pb-6 lg:p-0 leading-3">Social Data Science</h5>
                </span>
            </div>
        </div>
    </div>
    <div
        class="hidden lg:absolute w-full top-0 z-40 lg:flex items-center justify-center"
        style="right: {$scrolled - 100}%;"
    >
        <div class="h-52 w-2/4 m-auto">
            
            <IndexDataViz />
        </div>
    </div>
</div>
