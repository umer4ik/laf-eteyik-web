<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { fade } from "svelte/transition";
  import { clickOutside } from "../actions/clickOutside";
  const dispatch = createEventDispatcher()

  let isShown = false;
  export let onhover = false;
  function showPopover() {
    isShown = true;
    dispatch('popover_state_change', { isShown })
  }
  function hidePopover() {
    isShown = false;
    dispatch('popover_state_change', { isShown })
  }
  function onMouseEnter() {
    if (!onhover) return;
    showPopover();
  }
  function onMouseLeave() {
    if (!onhover) return;
    hidePopover();
  }
  function onClick(e: MouseEvent) {
    if (onhover) return;
    if (isShown) {
      hidePopover()
    } else {
      showPopover()
    }
  }
  function onClickOutside() {
    if (onhover) return;
    hidePopover();
  }

</script>

<div
  class="popover"
  use:clickOutside
  on:click_outside={onClickOutside}
  on:click={onClick}
  on:mouseenter={onMouseEnter}
  on:mouseleave={onMouseLeave}>
  <slot name="children"></slot>
  {#if isShown}
    <div class="content" transition:fade={{ duration: 100 }} on:click="{e => e.stopPropagation()}">
      <slot name="content"></slot>
    </div>
  {/if}
</div>

<style>
  .popover {
    display: inline-block;
    position: relative;
  }
  .content {
    background: var(--base-bg);
    padding: 10px;
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translate(-50%);
    padding: 12px 16px;
    border-radius: 4px;
    box-shadow: var(--popover-drop-shadow);
    background-image: var(--popover-linear-gradient);
  }
</style>