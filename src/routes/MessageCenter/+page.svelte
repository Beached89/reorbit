<script>
    /** @type {import('./$types').PageData} */
    export let data;
    const ctoon = data.message;
    console.log(data.message)
    import { draggable } from '@neodrag/svelte';

    function onmouseup(e) {
        console.log(e)        
        console.log(e.x,  e.y)        
        var rect = e.target.getBoundingClientRect();
        console.log(rect.x, rect.y)
        var left = e.x;
        var top = e.y;
        //console.log('left:' + left + "; top:" + top + "; UID:" + e.target.id +";");
        updateRecord(left,top,e.target.id)
    }

    async function updateRecord(x,y,uid) {
		const response = await fetch('/api/updateRecord', {
			method: 'POST',
			body: JSON.stringify({ x, y, uid }),
			headers: {
				'content-type': 'application/json'
			}
		});

		var r = await response.json();
	}
</script>

<!-- <div class="messagecenter"></div> -->

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
            <div on:mouseup={onmouseup} use:draggable={{bounds: 'parent'}} style="position: absolute; left: {toon.X_Cord}px; top: {toon.Y_Cord}px;"><img src={toon.img_url} width="100" alt="svelte logo" draggable="false" id={toon.uid}></div>
        {/each}
    {/if}
</div>