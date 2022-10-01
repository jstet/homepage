<script>
    import SideArt from "../lib/SideArt.svelte";
    import SubHeader from "../lib/SubHeader.svelte";
    import { header_height } from "$lib/stores/header_height.js";
    import {footer_height} from "$lib/stores/footer_height.js";
    import { window_width } from "$lib/stores/window_width.js";
    import { doc_height } from "$lib/stores/doc_height.js";
    import { det_doc_height } from "$lib/functions/dimension_helpers.js";
    import { sub_header_height } from "$lib/stores/sub_header_height.js";
    import { onMount } from "svelte";

    let pp1 = 0;
    let pp2 = 0;

    function handler() {
        location.reload();
    }

    function det_padding(page) {
        if ($window_width > 1024) {
            console.log($header_height + $sub_header_height);
            return $header_height + $sub_header_height;
        } else {
            if (page == 1){
                return 0;
        }
           else{
                
                return $header_height
           }
        }
    }

    onMount(async () => {
        $doc_height = det_doc_height(document);
        pp1 = det_padding(1);
    });

    $: if ($footer_height != 0 ){
        pp2 = det_padding(2);
    }
</script>

<svelte:window on:resize={handler} />

<SubHeader />

<!-- Page 1 -->
<div class="h-screen" id="page_1">
    <div class="lg:grid grid-cols-2" style="padding-top: {pp1}px;">
        <div class="lg:block hidden" />
        <div class="px-4 prose">
            <h2 class="pt-6">Biography</h2>
            <p class="">
                After completing my Bachelor's degree in Governance and Public
                Policy at the <a class=" " href="https://www.uni-passau.de/"
                    >University of Passau</a
                >, I worked for one year at the
                <a
                    class=" "
                    href="https://www.pik-potsdam.de/de/institut/futurelabs/sozialer-metabolismus-klimafolgen"
                >
                    Potsdam Institute for Climate Impact Research</a
                >. Currently, I am studying Social (and Economic) Data Science at
                the
                <a class=" " href="https://www.uni-konstanz.de/"
                    >University of Konstanz</a
                >, where I also work as a student assistant at the
                <a href="https://www.polver.uni-konstanz.de/cdm/"
                    >Center for Data and Methods</a
                >.
            </p>
            <p class=" ">
                In my free time, I volunteer with <a
                    class=" "
                    href="https://correlaid.org/correlaidx/konstanz/"
                    >CorrelAid</a
                >
                and grow vegetables in the<style>
                </style>
            </p>
            <p class="">
                To find out more, follow the links in the footer or
                <a href="mailto:mail@jstet.net">contact me</a>.
            </p>
        </div>
    </div>
</div>
<!-- Page 1 -->
<!-- Page 2 -->
<div class="h-screen">
    <div
        class="w-full lg:grid grid-cols-2 bg-transparent"
        style="padding-top: {pp2}px; padding-bottom: {100}px"
    >
        <div class="lg:block hidden" />
        <div class="px-4 prose">
            <h2 class="pt-6">Why do I have a homepage?</h2>
            <h5>Good question, here's a list:</h5>
            <ul>
                <li>To showcase projects</li>
                <li>I don't like LinkedIn</li>
                <li>To have control over what you see when you search for me on the Internet <sup>1</sup></li>
                <li>It's a nice side project that I can use as an excuse to code unnecessary stuff</li>
                <li>This list is actually just a page filler to have a reason for the scroll animation <sup>2</sup></li>
            </ul>
            <p><sup>1</sup> I know that probably rarely happens.</p>
            <p><sup>2</sup> Only on larger devices. Sorry.  I could have added a media query for displaying this text.</p>
        </div>
    </div>
</div>
<!-- Page 2 -->


<SideArt />
