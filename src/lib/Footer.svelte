<script>
    import GithubIcon from "./icons/GithubIcon.svelte";
    import TwitterIcon from "./icons/TwitterIcon.svelte";
    import MailIcon from "./icons/MailIcon.svelte";
</script>

<nav class="text-center py-3 bg-neutral-100 fixed bottom-0 w-full z-10">
    <span class="flex items-center justify-center">
        <a href="https://github.com/jstet">
            <GithubIcon cl="h-6 w-6 mx-4" />
        </a>
        <p class="text-xl font-bold">-</p>
        <a href="https://twitter.com/jstet_net">
            <TwitterIcon cl="h-6 w-6  mx-4" />
        </a>
        <p class="text-xl font-bold">-</p>
        <a href="mailto:mail@jstet.net">
            <MailIcon cl="h-6 w-6  mx-4" />
        </a>
    </span>
</nav>
