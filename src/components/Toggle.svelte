<script lang="ts">
  export let onChar = '+'
  export let offChar = '-'
  export let on = false
  export let dummy = false
  export function toggle(){
    if (dummy) return
    on = !on
  }
</script>

<div
  class="box"
  class:on
  on:click={toggle}
  on:click>
  <div class="rail">
    <div class="char char-on">{onChar}</div>
    <div class="char char-off">{offChar}</div>
    <div class="trigger"></div>
  </div>
</div>

<style>
  .box {
    user-select: none;;
    background-color: var(--settings-checkbox-bg);
    width: 50px;
    height: 24px;
    border-radius: 32px;
    position: relative;
    color: var(--contrast-text);
    cursor: pointer;
  }
  .rail {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 18px;
    text-align: center;
    padding: 2px 3px 0;
  }
  .char {
    width: 50%;
    opacity: 0;
  }
  .box:not(.on) .char-off {
    opacity: 1;
  }
  .on .char-on {
    opacity: 1;
  }
  .trigger {
    position: absolute;
    background-color: var(--settings-checkbox-trigger);
    width: 20px;
    height: 20px;
    top: 2px;
    left: 2px;
    border-radius: 50%;
    transition: box-shadow .2s var(--easing), transform .2s var(--easing);
  }
  .box:hover .trigger {
    box-shadow: var(--settings-checkbox-trigger-hover-shadow);
  }
  .box:active .trigger {
    box-shadow: var(--settings-checkbox-trigger-active-shadow);
  }
  .on .trigger {
    transform: translate3d(26px, 0, 0);
  }
</style>