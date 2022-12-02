<script lang="ts">
  export let title = ''
  export let description = ''
  export let href = ''
</script>

<a class="paper-link" href="{href}">
  <div class="title">{title}</div>
  {#if description}
  <div class="description">{description}</div>
  {/if}
</a>

<style>
  .paper-link {
    padding: 8px;
    box-shadow: var(--paper-drop-shadow-light);
    margin: 8px;
    width: 100%;
    text-decoration: none;
  }
  @media screen and (min-width: 640px) {
    .paper-link {
      width: calc(50% - 16px);
      padding: 12px 16px;
      transition: box-shadow .6s var(--easing);
    }
    .paper-link:hover {
      box-shadow: var(--paper-drop-shadow-hover-light);
    }
  }
  .title {
    font-size: 18px;
    text-decoration: underline;
  }
  @media screen and (min-width: 640px) {
    .title {
      font-size: 24px;
    }
  }
  .description {
    font-size: 16px;
    color: var(--text);
    text-decoration: none;
  }
  @media screen and (min-width: 640px) {
    .description {
      padding-top: 36px;
      font-size: 24px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
</style>