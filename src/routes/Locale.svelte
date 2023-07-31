<script>
  import { selectedLocale } from '$lib/stores'
  const locales = [
    {currency:'AUD',lang:'EN'},
    {currency:'USD',lang:'EN'},
    {currency:'NZD',lang:'EN'},
  ]
  
  selectedLocale.set(locales[0])
</script>

<div class="w-24 text-sm my-auto flex flex-row text-white">
  <select class="appearance-none bg-black" bind:value={$selectedLocale}>
    {#each locales as locale}
      {#if $selectedLocale == locale}
        <option value={locale} selected>$ {locale.currency}  /  {locale.lang}</option>
      {:else} 
        <option value={locale} >$ {locale.currency}  /  {locale.lang}</option>
      {/if}
    {/each}
  </select>
</div>
