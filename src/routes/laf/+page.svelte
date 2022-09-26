<script lang="ts">
  import type { PageData } from './$types'
  import Papers from "../../components/Papers.svelte";
  import { t, locale } from 'svelte-i18n'
  import Paper from '../../components/Paper.svelte';
    import type { CategoryPlain } from 'src/types';
  export let data: PageData
  const getCategoryName = (x: CategoryPlain) => {
    if (!$locale) return ''
    const l = $locale
    const name = x.name[l as 'uk' | 'ru']
    return name
  }
</script>

<h1>{$t('phrases.title')}</h1>
<Papers>
  {#if data.categories}
    {#each data.categories as category}
      <Paper
        href="{ `/laf/${category.alias}` }"
        title="{ ['uk', 'ru'].some(x => x === $locale) ? getCategoryName(category) : '' }" />
    {/each}
  {/if}
</Papers>
