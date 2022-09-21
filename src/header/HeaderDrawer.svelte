<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { t } from 'svelte-i18n'
  import { fly } from "svelte/transition";
  import { renderInRoot } from '../actions/renderInRoot'
  import { clickOutside } from '../actions/clickOutside'
  import HeaderButton from "./HeaderButton.svelte";
  import Badge from "../components/Badge.svelte";
  import Settings from "./Settings.svelte";

  export let open = false
  const dispatch = createEventDispatcher()
  const close= () => dispatch('close')
  let activeButton = ''
</script>

<div class="drawer-container" use:renderInRoot use:clickOutside on:click_outside={close}>
{#if open}
  <div class="drawer" in:fly={{ duration: 400, x: 290 }} out:fly={{ duration: 400, x: 290 }}>
    <div class="header">
      <div class="button">
        <HeaderButton emoji="🔍" inProgress title={$t('search')} />
      </div>
      <div class="button">
        <HeaderButton on:click={() => activeButton = 'settings'} emoji="⚙️" title={$t('settings')} active="{activeButton === 'settings'}" />
      </div>
      <div class="button">
        <HeaderButton on:click={() => activeButton = 'notifications'} emoji="🔔" title={$t('notifications')} active="{activeButton === 'notifications'}">
          <Badge count={3} />
        </HeaderButton>
      </div>
      <div class="button">
        <HeaderButton emoji="👨" inProgress title={$t('account')} />
      </div>
    </div>
    <div class="content">
      {#if activeButton === 'settings'}
        <div class="settings"><Settings /></div>
      {:else if activeButton === 'notifications'}
        Notifications
      {/if}
    </div>
  </div>
{/if}
</div>

<style>
  .drawer {
    position: fixed;
    width: 290px;
    height: 100%;
    right: 0;
    top: 0;
    background-color: var(--base-bg);
    z-index: 5;
    padding: 16px;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .button {
    margin-left: 10px;
    margin-right: 10px;
  }
  .content {
    padding-top: 10px;
  }
  .settings {
    width: 150px;
    margin: 20px auto 0;
  }
</style>