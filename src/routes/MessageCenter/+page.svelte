<script>
    /** @type {import('./$types').PageData} */
    export let data;
    const ctoon = data.message;
    console.log(data.message)
    import { draggable } from '@neodrag/svelte';

    function onmouseup() {
        console.log("Mouse UP");
    }
</script>

<div class="messagecenter">

</div>

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
    {#if ctoon.length > 0}
        {#each ctoon as toon}
            <div use:draggable={{bounds: 'parent'}} style="position: absolute; left: {toon.X_Cord}px; top: {toon.Y_Cord}px;" id={toon.uid}><img src={toon.img_url} width="100" alt="svelte logo" draggable="false"></div>
        {/each}
    {/if}
</div>

<svelte:window on:mouseup={onmouseup}></svelte:window>