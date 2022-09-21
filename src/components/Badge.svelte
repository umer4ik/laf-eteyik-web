<script lang="ts">
  export let count = 0
  $: shown = count > 10 ? '9+' : count === 0 ? '' : count.toString()
</script>

<span class="badge">
  {shown}
</span>

<style>
  .badge {
    position: absolute;
    color: var(--notification-text);
    background-color: var(--notification);
    width: 16px;
    height: 16px;
    bottom: 0;
    right: 0;
    border-radius: 50%;
    font-size: 9px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>