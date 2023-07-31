<script lang="ts">
  import { fade } from "svelte/transition";
  export let data:any
  let selectedImage:string = data.images[0]
</script>

<svelte:head>
  <title>POSSESHOT - {data.title}</title>
</svelte:head>

<main class="my-auto grid md:grid-cols-2 sm:grid-cols-1 justify-between gap-8">
  <section class="flex flex-col gap-4 ml-auto">
    <img
      class="w-96 aspect-square object-cover"
      src={selectedImage} alt=""
    >
    <div class="flex flex-row gap-4">
      {#each data.images as image}
        <label>
          <input 
            class="hidden" 
            type="radio" 
            bind:group={selectedImage} 
            value={image}
          >
          <img 
            src={image} 
            class={selectedImage == image ? 'border border-white w-16 aspect-square object-cover' : 'object-cover w-16 h-16'} alt=""
          >
        </label>
      {/each}
    </div>
  </section>

  <section class="mr-auto w-96 space-y-2">
    <h1 class="text-xl font-semibold">{data.title}</h1>
    <p class="text-lg">${data.price}</p>
    <button class="appearance-none py-1 w-40  border border-white">ADD TO CART</button>
    <p>{data.description}</p>
  </section>
</main>
