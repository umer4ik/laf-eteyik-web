<script lang="ts">
  import type { PageData } from "./$types";
  import BreadCrumbs from "src/components/BreadCrumbs.svelte";
  import type { BreadCrumb } from "src/types";
  import { t, locale } from 'svelte-i18n'
  import { cyrLat, translate } from "src/utils/translations";
  import { isCyr } from "src/stores/writing";
  import Papers from "src/components/Papers.svelte";
  import Paper from "src/components/Paper.svelte";
  export let data: PageData
  const phrase = data.phrase
  let breadcrumbs: BreadCrumb[] = []
  $: breadcrumbs = [
    { title: $t('main'), href: '/' },
    { title: $t('phrases.title'), href: '/laf' },
    ...(phrase ? [
      { title: translate(phrase.category.name, $locale), href: `/laf/${phrase.category.alias}` },
      { title: cyrLat(phrase.laf.qt, $isCyr)}
    ] : [])
  ]

</script>

<BreadCrumbs breadcrumbs={breadcrumbs} />
{#if phrase}
  <Papers>
    <Paper>
      <div class="content">
        {translate(phrase.laf, $locale)}
      </div>
    </Paper>
    <Paper>
      <div class="content">
        {cyrLat(phrase.laf.qt, $isCyr)}
      </div>
    </Paper>
  </Papers>
{/if}

<style>
  .content {
    padding-top: 4px;
    padding-bottom: 4px;
    font-size: 2rem;
    text-align: center;
  }
</style>