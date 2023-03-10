<script>
    import SideArt from "../lib/SideArt.svelte";
    import SubHeader from "../lib/SubHeader.svelte";
    import { dims } from "$lib/stores/dimensions.js";

    // export let data ;
</script>

<SubHeader />

<!-- Page 1 -->
<div style="min-height: {$dims.p1_height}px; padding-top: {$dims.p1_p_top}px;">
    <div class="lg:grid grid-cols-2" style="">
        <div class="lg:block hidden" />
        <div class="px-4 prose">
            <h2 class="pt-6 ">Biography</h2>
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
                >. Currently, I am studying Social (and Economic) Data Science
                at the
                <a class=" " href="https://www.uni-konstanz.de/"
                    >University of Konstanz</a
                >, where I also work as a student assistant at the
                <a href="https://www.polver.uni-konstanz.de/cdm/"
                    >Center for Data and Methods</a
                >. Since November 2022 I am employed as a working student at <a href="correlaid.org/">CorrelAid</a>.
            </p>
            <p class=" ">
                In my free time, I help coordinating the local chapter of CorrelAid in <a
                    class=" "
                    href="https://correlaid.org/correlaidx/konstanz/"
                    >Konstanz</a 
                >
                and grow vegetables in the university garden.
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
<div style="min-height: {$dims.p2_height}px; padding-top: {$dims.p2_p_top}px;">
    <div class="w-full lg:grid grid-cols-2 bg-transparent">
        <div class="lg:block hidden" />
        <div class="px-4 prose">
            <h2 class="pt-6">Why do I have a homepage?</h2>
            <h5>Good question, here's a list:</h5>
            <ul>
                <li>To showcase projects</li>
                <li>I don't like LinkedIn</li>
                <li>
                    It's a nice side project that I can use as an excuse to code
                    unnecessary stuff
                </li>
                <li>Lorem Ipsum</li>
                <li>
                    This list is actually just a page filler to have a reason
                    for the scroll animation. <sup>1</sup>
                </li>
            </ul>
            <p>
                <sup>1</sup> Only on larger devices. Sorry. I could have added a
                media query for displaying this text.
            </p>
        </div>
    </div>
</div>
<!-- Page 2 -->

<SideArt />
