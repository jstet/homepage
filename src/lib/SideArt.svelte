<script>
    import { doc_height } from "$lib/stores/doc_height.js";
    import { footer_height } from "$lib/stores/footer_height.js";
    import { window_width } from "$lib/stores/window_width.js";
    import  trianglify  from "trianglify";

    let pattern_container;

    let height = 0;
    let width = 0;

    function draw_pattern() {
        // apply trianglify to convert the points to polygons and apply the color
        // gradient

        width = $window_width / 2;

        height = $doc_height - $footer_height;
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
        pattern_container.appendChild(pattern.toCanvas());
    }

    $: if (
        $doc_height != 0 &&
        pattern_container != undefined &&
        $window_width > 1024
    ) {
        draw_pattern();
    }
</script>

<div
    bind:this={pattern_container}
    class="absolute top-0 hidden lg:block z-20"
/>

<style>
    div {
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
