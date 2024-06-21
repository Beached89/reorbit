<script>
    /** @type {import('./$types').PageData} */
    export let data;
    const ctoon = data.message;
    console.log(data.message)
</script>

<div class="messagecenter">
    {#if ctoon.length > 0}
        {#each ctoon as toon}
            <div>
                <img src="{toon.img_url}"/>
                <p style="color: white">{toon.display_name}</p>
            </div>
        {/each}
    {/if}
</div>
