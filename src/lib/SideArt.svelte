<script>
    import { dims, window_dims } from "$lib/stores/dimensions.js";
    import * as d3 from "d3";

    let pattern_container;

    let width = $window_dims.window_width / 2.5;
    let height = $dims.doc_height;

    var numCols = 20;

    let bounding_w = width / numCols;
    var padding = 4;
    var circle_r = bounding_w - padding;

    var numRows = Math.floor(height / bounding_w);

    // var numRowsRemainder = height / bounding_w - numRows;

    var genColor = d3
        .scaleSequential()
        .domain([0, height])
        .interpolator(d3.interpolateRainbow);

    var rows = [];
    var temp = padding;
    for (let i = 0; i < numRows; i++) {
        rows.push({ y: temp , c: genColor(temp) });
        temp = temp + bounding_w;
    }

    var cols = [];
    var temp = padding;
    for (let i = 0; i < numCols; i++) {
        cols.push({ x: temp});
        temp = temp + bounding_w;
    }

    console.log(rows, cols)
</script>

<svelte:window />

<div
    bind:this={pattern_container}
    class="absolute top-0 hidden lg:block z-20 opacity-75"
>
    <svg {width} {height}>
            {#each cols as col}
                <g>
                    {#each rows as row}
                        <rect
                            x={col.x}
                            y={row.y}
                            fill={row.c}
                            width={circle_r}
                            height={circle_r}
                        />
                    {/each}
                </g>
            {/each}
    </svg>
</div>

<style>
</style>
