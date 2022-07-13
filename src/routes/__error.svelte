<script lang="ts">
  import { t } from 'svelte-i18n'
  let notFound = $t('not_found')
</script>

<svelte:head>
  <title>{notFound}</title>
  <meta name="description" content="{notFound}">
</svelte:head>

<h1>{notFound}</h1>
