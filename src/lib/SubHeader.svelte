<script>
    import IndexDataViz from "./IndexDataViz.svelte";
    import { scrolled } from "$lib/stores/scrolled.js";
    import { dims } from "$lib/stores/dimensions.js";
    
    // export let data;
</script>

<div
    class=" bg-neutral-100 w-full lg:fixed lg:z-30"
    style="height: {$dims.sub_header_height}px; margin-top: {$dims.header_height}px; "
>
    <div class="lg:relative flex flex-row lg:flex-row h-full" style="right: {$scrolled}%">
        <div class="flex items-center justify-center basis-2/4">
            <div class="lg:p-0 py-6 w-32">
                <img width="500" height="500" src="media/me.jpeg" class="rounded-full" alt="" />
            </div>
        </div>
        <div class=" basis-2/4 m-auto px-4">
            
            <span class="text-center lg:text-left prose lg:prose-lg">
                <h3 class="leading-6">Graduate Student</h3>
                <h5 class="leading-6">Social Data Science</h5>
            </span>
            
        </div>
    </div>
    <div
        class="hidden lg:absolute w-full top-0 z-40 lg:flex items-center justify-center"
        style="right: {$scrolled - 100}%;"
    >
        <div class="h-52 w-2/4 m-auto">
            <!-- <IndexDataViz {data}/> -->
        </div>
    </div>
</div>
