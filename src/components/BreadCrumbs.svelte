<script lang="ts">
  import type { BreadCrumb } from 'src/types'
  export let breadcrumbs: BreadCrumb[] = []
</script>

<ul class="breadcrumbs">
  {#each breadcrumbs as x }
    <li class="breadcrumb">
      {#if x.href}
        <a href="{x.href}">{x.title}</a>
        <span class="arrow">-></span>
      {:else}
        {x.title}
      {/if}
    </li>
  {/each}
  
</ul>

<style>
  .breadcrumbs {
    font-size: 14px;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 8px 0 16px;
  }
  .breadcrumb {
    color: var(--text);
    text-decoration: none;
    display: flex;
  }
  .arrow {
    color: var(--links);
    margin: 0 .5ch;
  }
  .breadcrumb a {
    color: var(--links);
  }
</style>