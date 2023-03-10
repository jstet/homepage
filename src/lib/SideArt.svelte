<script>
    import { onMount } from "svelte";
    import { dims, window_dims } from "$lib/stores/dimensions.js";
    import * as d3 from "d3";
    import _ from "lodash";
    let cols = [];
    let rows = [];
    let box;

    let height, width;

    $: width = $window_dims.window_width / 2.5;
    $: height = $dims.doc_height;

    const draw = (width, height) => {
        cols = [];
        rows = [];
        const padding = 18;
        const bounding_w = 50;

        var numCols = (width - padding) / bounding_w;

        box = bounding_w - padding;

        var numRows = Math.floor(height / bounding_w);

        var genColor = d3
            .scaleSequential()
            .domain([0, height])
            .interpolator(d3.interpolateRainbow);

        var temp = padding;
        let st,
            en = 0;
        for (let i = 0; i < numRows; i++) {
            st = _.random(0, numCols / 2 - 1);
            en = _.random(numCols / 2 + 1, numCols);
            rows.push({ y: temp, c: genColor(temp), start: st, end: en });
            temp = temp + bounding_w;
        }

        var temp = padding;
        for (let i = 0; i < numCols; i++) {
            cols.push({ x: temp });
            temp = temp + bounding_w;
        }
    };

    $: draw(width, height);
</script>

{#if cols}
    <div class="absolute top-0 hidden lg:block z-20" style="opacity: 20%;">
        <svg {width} {height}>
            {#each rows as row}
                <g>
                    {#each _.slice(cols, [row.start], [row.end]) as col}
                        <rect
                            x={col.x}
                            y={row.y}
                            fill={row.c}
                            width={box}
                            height={box}
                        />
                    {/each}
                </g>
            {/each}
        </svg>
    </div>
{/if}

<style>
</style>
