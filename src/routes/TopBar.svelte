<script>
    import BannerAd from "./BannerAd.svelte";
    import HomeLogo from "./HomeLogo.svelte";
</script>
<style>
	.top_bar {
        height:100px;
		display: inline-block;
		white-space: nowrap;
		position: center;
        margin-top:10px;
        margin-bottom: -40px;
        margin-left:0px;
        margin-right:0px;
        border-radius: 8px;
	}
</style>

<div class="top_bar">
    <HomeLogo />
    <BannerAd />
</div>