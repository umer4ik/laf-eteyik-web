<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import { t } from 'svelte-i18n'
</script>

<svelte:head>
  <title>{$t('home_title')}</title>
  <meta name="description" content="{$t('home_description')}" />
</svelte:head>

<section>
  <b>Laf Eteyik</b> - {$t('intro')}
</section>

<style>
  section {
    font-size: 16px;
    text-align: center;
    margin-top: 0;
  }
  @media screen and (min-width: 640px) {
    section {
      font-size: 30px;
      margin-top: 84px;
    }
  }
</style>
