<script lang="ts">
  import type { PageData } from './$types'
  import { t, locale } from 'svelte-i18n'
  import type { CategoryPlain } from 'src/types';
  import BreadCrumbs from 'src/components/BreadCrumbs.svelte';
  import ErrorFeedback from 'src/components/ErrorFeedback.svelte';
  import { translate } from 'src/utils/translations';
  export let data: PageData
</script>

<BreadCrumbs
  breadcrumbs={[
    { title: $t('main'), href: '/' },
    { title: $t('phrases.title') },
  ]} />
<div>
  {#if data.categories}
    {#each data.categories as category}
      <div class="category">
        {#if category.categories}
          <span>
            { translate(category.name, $locale) }
          </span>
          <div class="subcategories">
            {#each category.categories as subcategory}
              <div class="subcategory">
                <a href="{ `/laf/${subcategory.alias}` }">
                  { translate(subcategory.name, $locale) }
                </a>
              </div>
            {/each}
          </div>
        {:else}
        <a href="{ `/laf/${category.alias}` }">
          { translate(category.name, $locale) }
        </a>
        {/if}
      </div>
    {/each}
  {/if}
  {#if data.error}
    <ErrorFeedback>
      { data.error.message }
    </ErrorFeedback>
  {/if}
</div>

<style>
  .category {
    margin-bottom: .5rem;
    font-size: 20px;
  }
  .subcategory {
    margin: .5rem 0 .5rem 1rem;
    font-size: 16px;
  }
</style>