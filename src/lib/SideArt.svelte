<script>
    import { onMount } from "svelte";
    import trianglify from "trianglify";

    let outerHeight;
    let outerWidth;
    let pattern_container;

    function draw_pattern() {
        var height = outerHeight;

        var width = outerWidth / 2;

        // apply trianglify to convert the points to polygons and apply the color
        // gradient
        var pattern1 = trianglify({
            height,
            width,
            cellSize: 80,
            strokeWidth: 2,
            fill: false,
            yColors: ["#3273DC", "#F4F4F4"],
        });

        // use the toCanvas function to render the generated geometry to an HTML5
        // canvas element
        pattern_container.appendChild(pattern1.toCanvas());
    }
    onMount(async () => {
        draw_pattern();
    });
</script>

<svelte:window bind:outerHeight bind:outerWidth on:resize={draw_pattern} />

<div bind:this={pattern_container} class="absolute hidden lg:block" />

<style>
    div {
        z-index: -100;
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
