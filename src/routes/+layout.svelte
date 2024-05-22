<script>
    import Navbar from "./Navbar.svelte";
    import TopBar from "./TopBar.svelte";
</script>

<div class="container">
    <TopBar />
    <Navbar /> 

    <slot />
</div>

