<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import { browser } from '$app/environment';
  import Header from '../header/Header.svelte';
  import Footer from '../footer/Footer.svelte'
  import { isDarkTheme, theme, THEMES } from '../stores/theme';
  import { mobileDrawer } from '../stores/mobileDrawer'
  import { initI18n } from '../i18n/i18n'
  import '../app.css';
  initI18n()
  onMount(() => {
    if (browser) {
      document.querySelector('html')?.setAttribute('data-theme', $theme)
    }
  })
  const unsubscribe = theme.subscribe(x => {
    if (browser) {
      document.querySelector('html')?.setAttribute('data-theme', x)
    }
  })
  onDestroy(() => {
    unsubscribe()
  })
</script>

<Header />

<main class="{$mobileDrawer ? 'drawer-open' : ''}">
  <slot />
</main>

<Footer />

<style>
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 56px 16px 16px;
    width: 100%;
    max-width: var(--content-width);
    margin: 0 auto;
    box-sizing: border-box;
    transition: filter .4s var(--easing);
    
  }
  @media screen and (min-width: 640px) {
    main {
      padding-top: 86px;
    }
  }
  .drawer-open {
    filter: blur(3px);
  }
</style>
