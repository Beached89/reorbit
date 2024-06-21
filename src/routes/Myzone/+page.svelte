<script>
	import { draggable } from '@neodrag/svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>
<pre> {data}</pre>


<style>
	.czone {
		width: 796px;
		height: 496px;
		border: 2px solid #309ACF;
		border-radius: 0;
		overflow: hidden; 
		display: grid;
		place-items: center;
		background-image: url("https://i.imgur.com/7szYvU4.jpg");
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
	}
</style>

<div class="czone">
	<div use:draggable={{bounds: 'parent'}} style="position: absolute; left: 400px; top: 120px;"><img src="https://i.imgur.com/3KuPgq2.png" width="100" alt="svelte logo" draggable="false"></div>
	<div use:draggable={{bounds: 'parent'}} style="position: absolute; left: 100px; top: 200px;"><img src="https://i.imgur.com/4GwbL3u.png" width="100" alt="svelte logo" draggable="false"></div>
</div>