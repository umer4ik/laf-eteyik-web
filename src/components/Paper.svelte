<script lang="ts">
  
</script>

<div class="paper">
  <slot />
</div>

<style>
  .paper {
    padding: 8px;
    box-shadow: var(--paper-drop-shadow-light);
    margin: 8px;
    width: 100%;
    text-decoration: none;
  }
  @media screen and (min-width: 640px) {
    .paper {
      width: calc(50% - 16px);
      padding: 12px 16px;
    }
  }
</style>