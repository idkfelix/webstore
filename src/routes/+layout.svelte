<script lang="ts">
  import '../app.css'
  import Search from './Search.svelte';
  import Basket from './Basket.svelte';
  import Locale from './Locale.svelte';

  import bagIcon from '$lib/assets/bag.svg'
  import searchIcon from '$lib/assets/search.svg'
  import logo from '$lib/assets/panther.png'

  let showSearch:boolean
  let showBasket:boolean

  import { fade } from 'svelte/transition';
  export let data:any
</script>

<main class="h-screen py-6 px-20 flex flex-col gap-6 text-white font-anon scroll-smooth">
  <nav class="min-h-28 flex flex-col">
    <div class="h-24 flex flex-row w-full justify-between">
      <Locale/>
      <a href="/"><img class="w-40 h-20 my-auto" src={logo} alt=""/></a>
      <div class="w-24 my-auto flex flex-row justify-between">
        <span class="w-4"/>
        <button on:click={() => (showSearch = true)}>
          <img class="w-4" src={searchIcon} alt="">
        </button>
        <button on:click={() => (showBasket = true)}>
          <img class="w-4" src={bagIcon} alt="">
        </button>
      </div>
    </div>
    <div class="h-4 pt-1 text-xs flex flex-row justify-between w-auto gap-10 mx-auto">
      <a class="w-10 text-right" href="/tickets">TICKETS</a>
      <a class="w-10 text-center" href="/store">STORE</a>
     <a class="w-10 text-left" href="/contact">CONTACT</a>
    </div>
  </nav>
  {#key data.pathname}
    <div
    class="flex-grow"
    in:fade={{ duration: 300, delay: 400 }}
    out:fade={{ duration: 300 }}
    >
      <slot />
    </div>
  {/key}
  <footer class="h-24 flex">
    <p class="text-center text-xs mt-auto w-full">POSSESHOT</p>
  </footer>
</main>

<Search bind:showSearch/>
<Basket bind:showBasket/>
