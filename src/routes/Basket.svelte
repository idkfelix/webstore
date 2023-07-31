<script lang="ts">
	export let showBasket:boolean; // boolean

	let dialog:any // HTMLDialogElement

	$: if (dialog && showBasket) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
  class="font-anon"
	bind:this={dialog}
	on:close={() => (showBasket = false)}
	on:click|self={() => dialog.close()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation class="border p-1 bg-black text-white w-96 h-96">
		<!-- svelte-ignore a11y-autofocus -->
    <div class="mx-2 flex justify-between">
      <h1 class="text-2xl">Basket:</h1>
		  <button autofocus on:click={() => dialog.close()} class="mx-1 font-semibold">✕</button>
    </div>
	</div>
</dialog>

<style>
  dialog::backdrop {
		background: rgba(0, 0, 0, 0.5);
	}
</style>
