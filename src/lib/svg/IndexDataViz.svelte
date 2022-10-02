<script>
        import { sub_header_height } from "$lib/stores/sub_header_height.js";
        import { window_width } from "$lib/stores/window_width.js";

        var dimx = 0
        var dimy = 0
        $: dimx = $window_width/2
        $: dimy = $sub_header_height


</script>



<svg viewport="0 0 {dimx} {dimy}" class="w-full h-full">
    <text x="2%" y="20%">I am currently collecting data for a visualization that will be displayed here later....</text>
    <!-- <g stroke-width="2">
        <line x1="2%" y1="90%" x2="2%" y2="70%" stroke="black" />
        <line
            x1="98%"
            y1="90%"
            x2="98%"
            y2="70%"
            stroke="black"
        />
        <line x1="2%" y1="80%" x2="98%" y2="80%" stroke="black" />
    </g> -->
</svg>