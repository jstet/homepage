<script>
    import GithubIcon from "./icons/GithubIcon.svelte";
    import TwitterIcon from "./icons/TwitterIcon.svelte";
    import MastodonIcon from "./icons/MastodonIcon.svelte";
    import MailIcon from "./icons/MailIcon.svelte";
    import { dims } from "$lib/stores/dimensions.js";
</script>

<nav
    class="text-center bg-neutral-100 fixed bottom-0 w-full z-30 flex items-center justify-center"
    style="height: {$dims.footer_height}px;"
>
    <a href="https://github.com/jstet">
        <GithubIcon cl="h-6 w-6 mx-6" />
    </a>
    <p class="text-lg font-bold">-</p>
    <a href="https://mastodon.online/@jstet">
        <MastodonIcon cl="h-6 w-6  mx-6" />
    </a>
    <p class="text-lg font-bold">-</p>
    <a href="https://twitter.com/jstet_net">
        <TwitterIcon cl="h-6 w-6  mx-6" />
    </a>
    <p class="text-lg font-bold">-</p>
    <a href="mailto:mail@jstet.net">
        <MailIcon cl="h-6 w-6  mx-6" />
    </a>
</nav>
