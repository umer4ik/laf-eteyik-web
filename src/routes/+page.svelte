<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import PaperLink from '../components/PaperLink.svelte';
  import Papers from '../components/Papers.svelte';
  import { t } from 'svelte-i18n'

</script>

<svelte:head>
  <title>{$t('home_title')}</title>
  <meta name="description" content="{$t('home_description')}" />
</svelte:head>

<section class="intro">
  <b>Laf Eteyik</b> - {$t('intro')}
</section>
<Papers>
  <PaperLink
    href="/laf"
    title="{$t('phrases.title')}"
    description="{$t('phrases.description')}" />
</Papers>
<style>
  section {
    font-size: 16px;
    text-align: center;
    margin: 0 0 16px;
  }
  @media screen and (min-width: 640px) {
    .intro {
      font-size: 30px;
      margin: 84px 0;
    }
  }
</style>
