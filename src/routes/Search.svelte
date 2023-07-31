<script lang="ts">
	export let showSearch:boolean; // boolean

	let dialog:any // HTMLDialogElement

	$: if (dialog && showSearch) dialog.showModal();
  let searchString:string|null
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
  class="font-anon"
	bind:this={dialog}
	on:close={() => (showSearch = false)}
	on:click|self={() => dialog.close()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<form on:click|stopPropagation class="border p-1 bg-black text-white"> 
    <button
      class="text-right mx-1"
      on:click={() => {if(searchString){window.location.href = `/store/?q=${searchString}`}}}
      type="submit"
    >
      Search:
    </button> 
		<!-- svelte-ignore a11y-autofocus -->
	  <input class="border-white appearance-none outline-none bg-black" bind:value={searchString} type="text" autofocus>
		<button on:click={() => dialog.close()} class="mx-1">
      ✕
    </button>
	</form>
</dialog>

<style>
  dialog::backdrop {
		background: rgba(0, 0, 0, 0.5);
	}
</style>
