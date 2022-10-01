<script>
    import { onMount } from "svelte";
    import { header_height } from "$lib/stores/header_height.js";
    import { sub_header_height } from "$lib/stores/sub_header_height.js";

    let clientHeight;

    onMount(async () => {
        sub_header_height.set(clientHeight);
    });
</script>

<div
    class=" bg-neutral-100 w-full grid grid-rows-2 lg:grid-cols-2 lg:h-40 lg:fixed lg:z-30" id="sub_header"
    bind:clientHeight
    style="margin-top: {$header_height}px"
>
    <div class="lg:h-40 flex items-center justify-center">
        <div class="lg:p-0 py-4 w-32">
            <img src="media/me.jpeg" class="rounded-full" alt="" />
        </div>
    </div>
    <div class="lg:h-40 lg:flex items-center ">
        <span class="text-center lg:text-left px-4 prose lg:prose-xl">
            <h3 class="">
                Graduate Student
            </h3>
            <h5 class=" pb-6 lg:p-0">
                Social Data Science
            </h5>
        </span>
    </div>
</div>

<style>

</style>