<script lang="ts">
  import { page } from "$app/stores";
  import { selectedLocale } from "$lib/stores";
  export let data:any
  $: products = data.products

  $: pageSize = (Number($page.url.searchParams.get('limit')) || 18);
  $: totalProducts = data.total
  $: totalPages = Math.ceil(totalProducts / pageSize)
  $: currentPage = (Number($page.url.searchParams.get('skip')) / pageSize)

  function updatePageSize(event: Event) { 
    const newSize = (event.target as HTMLSelectElement).value;
    const url = new URL(window.location.href);
    url.searchParams.set('limit', newSize);
    window.location.href = url.toString();
  }

  let searchString:string|null = null
</script>

<!-- <div class="flex flex-row gap-2 py-4"> -->
<!--   <p>Page Size: </p> -->
<!--   <select class="appearance-none bg-black text-bold" on:change={updatePageSize} bind:value={pageSize}> -->
<!--     {#each [15,30,45] as size} -->
<!--       <option value={size}>{size}</option> -->
<!--     {/each} -->
<!--   </select> -->
<!-- </div> -->
<ul class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-6">
{#each products as prod}
  <li id={prod.id} class="mx-auto w-full text-center relative transition-all duration-500 hover:scale-[1.015]">
    <a href="/store/{prod.id}"><img src={prod.thumbnaill || 'https://images.placeholders.dev/?width=300&height=400'} class="w-80 aspect-[3/4] object-cover mb-2" alt=""></a>
    <a href="/store/{prod.id}" class="font-semibold tracking-wider">{prod.title}</a>
    <p class="font-light text-sm">${prod.price} {$selectedLocale.currency}</p>
  </li>
{/each}
</ul>
 
<div class="flex flex-row gap-3 mx-auto w-fit">
{#each Array(totalPages) as _, idx}
  <a href="/store?limit={pageSize}&skip={pageSize * idx}" class={currentPage == idx ? 'font-bold underline' : ''}>{idx + 1}</a>
{/each}
</div>
