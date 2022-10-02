<script>
    import { onMount } from "svelte";
    import GithubIcon from "./icons/GithubIcon.svelte";
    import TwitterIcon from "./icons/TwitterIcon.svelte";
    import MailIcon from "./icons/MailIcon.svelte";
    import { footer_height } from "$lib/stores/footer_height.js";

    let clientHeight;

    onMount(async () => {
        footer_height.set(clientHeight);
    });
</script>

<nav class="text-center py-3 bg-neutral-100 fixed bottom-0 w-full z-30" bind:clientHeight>
    <span class="flex items-center justify-center">
        <a href="https://github.com/jstet">
            <GithubIcon cl="h-6 w-6 mx-6" />
        </a>
        <p class="text-lg font-bold">-</p>
        <a href="https://twitter.com/jstet_net">
            <TwitterIcon cl="h-6 w-6  mx-6" />
        </a>
        <p class="text-lg font-bold">-</p>
        <a href="mailto:mail@jstet.net">
            <MailIcon cl="h-6 w-6  mx-6" />
        </a>
    </span>
</nav>
