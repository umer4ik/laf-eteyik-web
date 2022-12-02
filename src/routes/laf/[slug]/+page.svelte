<script lang="ts">
  import BreadCrumbs from "src/components/BreadCrumbs.svelte";
  import ErrorFeedback from "src/components/ErrorFeedback.svelte";
  import { isCyr } from "src/stores/writing";
  import type { BreadCrumb, CategoryPlain } from "src/types";
  import { cyrLat, translate } from "src/utils/translations";
  import { t, locale } from 'svelte-i18n'
  import type { PageData } from './$types'
  export let data: PageData
  let breadcrumbs: BreadCrumb[] = []
  let cat: CategoryPlain | undefined = data.category
  $: breadcrumbs = [
    { title: $t('main'), href: '/' },
    { title: $t('phrases.title'), href: '/laf' },
    ...(
      cat
      ? [{ title: translate(cat.name, $locale) }]
      : []
    )
  ]


</script>

<BreadCrumbs
  breadcrumbs={breadcrumbs} />

<div class="phrases-page">
  {#if cat}
    <div class="table-header"> 
      <div class="table-heading">{translate(cat.name, $locale)}</div>
      <div class="table-heading">{$isCyr ? cat.name.qt.cyr : cat.name.qt.lat }</div>
    </div>
    <div class="table-content">
      {#if cat.phrases}
        {#each cat.phrases as phrase}
          <div class="table-content-row">
            <div class="table-content-col">{translate(phrase.laf, $locale)}</div>
            <div class="table-content-col">
              <div class="qt-phrase-box">
                <span>
                  {cyrLat(phrase.laf.qt, $isCyr)}
                </span>
                <span class="buttons">
                  <a class="icon-button" href={`/syoz/${phrase.alias}`}>
                    ➡️
                  </a>
                </span>
              </div>
            </div>
          </div>
        {/each}
      {/if}
    </div>
  {/if}
  {#if data.error}
    <ErrorFeedback>
      { data.error.message }
    </ErrorFeedback>
  {/if}
</div>

<style>
  .qt-phrase-box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .buttons {
    margin-top: -4px;
    margin-bottom: -4px;
  }
  .icon-button {
    opacity: 0;
    width: 26px;
    height: 26px;
    vertical-align: middle;
    display: inline-flex;
    line-height: 1;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: 1px solid var(--common-icon-button-border);
    background-color: var(--base-bg);
    text-decoration: none;
  }
  .table-content-row:hover .icon-button {
    opacity: 1;
  }
  .icon-button:hover {
    box-shadow: var(--common-icon-button-hover-shadow);
    background-color: var(--common-icon-button-hover);
  }
  .phrases-page {
    position: relative;
  }
  .table-header {
    position: sticky;
    top: 70px;
    background-color: var(--base-bg);
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 8px;
  }
  @media screen and (min-width: 640px) {
    .table-header {
      margin-bottom: 0;
    }
  }
  .table-heading {
    font-weight: 500;
  }
  .table-heading:first-of-type {
    background-color: var(--table-colored-row);
  }
  .table-heading:last-of-type {
    background-color: var(--table-colored-row-hover);
  }
  @media screen and (min-width: 640px) {
    .table-heading {
      border-bottom: 1px solid var(--text);
    }
    .table-heading:first-of-type {
      background-color: transparent;
    }
    .table-heading:last-of-type {
      background-color: transparent;
    }
  }
  .table-content-row {
    display: flex;
    flex-grow: 1;
    margin-bottom: 8px;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 640px) {
    .table-content-row {
      margin-bottom: 0;
    }
  }
  .table-content-row:not(:last-of-type) .table-content-col {
    border-bottom: 1px solid var(--text);
  }
  .table-heading, .table-content-col {
    padding: .5rem;
    width: 100%;
    max-width: 100%;
    min-width: 100%;
  }
  @media screen and (min-width: 640px) {
    .table-heading, .table-content-col {
      width: 50%;
      max-width: 50%;
      min-width: 50%;
    }
  }
  .table-content-row:nth-of-type(2n) {
    background-color: var(--table-colored-row);
  }
  .table-content-row:hover {
    background-color: var(--table-colored-row-hover);
  }
</style>