<script>
    import Navbar from "./Navbar.svelte";
    import TopBar from "./TopBar.svelte";
</script>
<style>

	.top_bar {
        height:100px;
		display: inline-block;
		white-space: nowrap;
		position: center;
	}

</style>
<div class="container">
    <TopBar />
    <Navbar /> 

    <slot />
</div>

