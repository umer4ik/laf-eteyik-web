<script lang="ts">
  import { t } from 'svelte-i18n'
  export let emoji = ''
  export let disabled = false
  export let inProgress = false
  export let title = ''
  export let active = false
  const _title = inProgress ? `${title} (${$t('in_progress').toLowerCase()})` : title
</script>

<button disabled="{disabled || inProgress}" class:active title="{_title}" on:click>
  <span class="emoji">{emoji}</span>
  <slot></slot>
</button>

<style>
  button {
    width: 40px;
    height: 40px;
    background-color: var(--header-button-bg);
    border: none;
    font-size: 24px;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
  }
  button:disabled {
    opacity: 0.33;
    cursor: not-allowed;
  }
  button:hover:not(:disabled) {
    background-color: var(--header-button-hover);
  }
  button.active {
    box-shadow: var(--header-button-active);
  }
  .emoji {
    vertical-align: middle;
  }
</style>