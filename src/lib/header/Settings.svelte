<script lang="ts">
  import { t, locale } from 'svelte-i18n'
  import Toggle from '$lib/components/Toggle.svelte';
  import { toggleTheme, isDarkTheme } from '$lib/stores/theme';
  import { toggleWriting, isCyr } from '$lib/stores/writing';
  import { toggleLocale } from '../../i18n/i18n';
</script>

<div class="box">
  <div class="row">
    <div class="label">{$t('theme')}</div>
    <div class="toggle">
      <Toggle on={$isDarkTheme} dummy on:click={toggleTheme} offChar="🌝" onChar="🌚" />
    </div>
  </div>
  <div class="row">
    <div class="label">{$t('language')}</div>
    <div class="toggle">
      <Toggle on={$locale === 'ru'} dummy on:click={toggleLocale} offChar="🇺🇦" onChar="🐷" />
    </div>
  </div>
  <div class="row">
    <div class="label">{$t('writing')}</div>
    <div class="toggle">
      <Toggle on={$isCyr} dummy on:click={toggleWriting} offChar="q" onChar="къ" />
    </div>
  </div>
</div>

<style>
  .box {
    min-width: 150px;
    margin-top: -12px;
    margin-bottom: -12px;
  }
  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 12px;
    margin-bottom: 12px;
  }
</style>