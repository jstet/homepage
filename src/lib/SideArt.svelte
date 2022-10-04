<script>
    import { dims, window_dims } from "$lib/stores/dimensions.js";
    import trianglify from "trianglify";
    import { onMount } from "svelte";

    let pattern_container;

    function draw_pattern() {
        // apply trianglify to convert the points to polygons and apply the color
        // gradient

        if ($dims.doc_height != 0) {
            if (pattern_container.innerHTML != "") {
                pattern_container.innerHTML = "";
            }

            var width = $window_dims.window_width / 2;

            var height = $dims.doc_height - $dims.footer_height;
            
            var pattern = trianglify({
                height,
                width,
                cellSize: 80,
                strokeWidth: 2,
                fill: false,
                yColors: ["#3273DC", "#F4F4F4"],
            });

            // use the toCanvas function to render the generated geometry to an HTML5
            // canvas element
            pattern.toSVG(pattern_container);
        }
        else{

        }
    }

    onMount(async () => {
        draw_pattern();
    });
</script>

<svelte:window on:resize={draw_pattern} />

<svg
    fill="none"
    height="100%"
    width="50%"
    bind:this={pattern_container}
    class="absolute top-0 hidden lg:block z-20"
/>

<style>
    svg {
        clip-path: polygon(
            0 0,
            40% 25%,
            0 50%,
            40% 75%,
            0 100%,
            40% 100%,
            80% 75%,
            40% 50%,
            80% 25%,
            40% 0
        );
    }
</style>
