<script>
	import { draggable } from '@neodrag/svelte';
</script>
<style>
	.czone {
		width: 796px;
		height: 496px;
		border: 2px solid #309ACF;
		border-radius: 0;
		overflow: hidden; 
		display: grid;
		place-items: center;
		background-image: url("https://64.media.tumblr.com/8769e8177111986f5f9330506ee95a9e/d60575209126f066-69/s1280x1920/ea73ea8eab8f75738a15c13244670a70d568417f.png");
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>

<div class="czone" >
	<div use:draggable={{bounds: 'parent'}} ><img src="https://i.imgur.com/3KuPgq2.png" width="100" alt="svelte logo" draggable="false"></div>
	<div use:draggable={{bounds: 'parent'}} ><img src="https://i.imgur.com/4GwbL3u.png" width="100" alt="svelte logo" draggable="false"></div>
</div>