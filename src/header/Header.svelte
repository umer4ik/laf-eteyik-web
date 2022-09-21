<script lang="ts">
  import { page } from '$app/stores';
  import { t } from 'svelte-i18n'
  import Settings from './Settings.svelte';
  import Popover from '../components/Popover.svelte';
  import Badge from '../components/Badge.svelte';
  import HeaderButton from './HeaderButton.svelte';
  import HeaderDrawer from './HeaderDrawer.svelte';
  import { closeMobileDrawer, mobileDrawer, openMobileDrawer } from '../stores/mobileDrawer';
  let activeButton: string

  function createOnButtonClick(button: string) {
    return function({ detail: { isShown } }: CustomEvent<{ isShown: boolean }>) {
      if (isShown) {
        activeButton = button
      } else if (button === activeButton) {
        activeButton = ''
      }
    }
  }
</script>

<div class="header-box {$mobileDrawer ? 'drawer-open' : ''}">
  <header>
    <a href="/" class="logo">🗣 Laf Eteyik ️</a>
    <div class="controls">
      <div class="button-box">
        <HeaderButton emoji="🔍" inProgress title={$t('search')} />
      </div>
      <div class="button-box">
        <Popover on:popover_state_change={createOnButtonClick('settings')}>
          <HeaderButton slot="children" emoji="⚙️" title={$t('settings')} active="{activeButton === 'settings'}" />
          <div slot="content">
            <Settings />
          </div>
        </Popover>
      </div>
      <div class="button-box">
        <Popover on:popover_state_change={createOnButtonClick('notifications')}>
          <HeaderButton slot="children" emoji="🔔" title={$t('notifications')} active="{activeButton === 'notifications'}" >
            <Badge count={3} />
          </HeaderButton>
          <div slot="content">
            Notifications
          </div>
        </Popover>
      </div>
      <div class="button-box">
        <HeaderButton emoji="👨" inProgress title={$t('account')} />
      </div>
    </div>
    <div class="mobile-button" on:click={openMobileDrawer}>
      <div class="line line-1"></div>
      <div class="line line-2"></div>
      <div class="line line-3"></div>
    </div>
    <HeaderDrawer open={$mobileDrawer} on:close={closeMobileDrawer}></HeaderDrawer>
  </header>
</div>

<style>
  .header-box {
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    height: 40px;
    background-color: var(--base-bg);
    box-shadow: var(--header-drop-shadow);
    background-image: var(--header-linear-gradient);
    z-index: 5;
    transition: filter .4s var(--easing);
  }
  @media screen and (min-width: 640px) {
    .header-box {
      height: 70px;
    }
  }
  .drawer-open {
    filter: blur(3px);
  }
  header {
    max-width: var(--content-width);
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: 16px;
    padding-right: 16px;
  }
  .logo {
    color: var(--logo);
    text-decoration: none;
    font-size: 16px;
  }
  @media screen and (min-width: 640px) {
    .logo {
      font-size: 40px;
    }
  }
  .controls {
    display: none;
    margin-left: auto;
    margin-right: -4px;
  }
  @media screen and (min-width: 640px) {
    .controls {
      display: flex;
    }
  }
  .button-box {
    margin-left: 4px;
    margin-right: 4px;
  }
  .mobile-button {
    display: flex;
    flex-direction: column;
    height: 14px;
    justify-content: space-between;
    align-items: flex-end;
    margin-left: auto;
  }
  @media screen and (min-width: 640px) {
    .mobile-button {
      display: none;
    }
  }
  .line {
    height: 2px;
    background-color: var(--logo);
  }
  .line-1 {
    width: 20px;
  }
  .line-2 {
    width: 12px;
  }
  .line-3 {
    width: 7px;
  }
</style>
