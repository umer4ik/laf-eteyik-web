declare namespace svelte.JSX {
  interface HTMLAttributes<T> {
      // If you want to use on:beforeinstallprompt
      onclick_outside?: (event: MouseEvent) => any;
      // If you want to use myCustomAttribute={..} (note: all lowercase)
      mycustomattribute?: any;
      // You can replace any with something more specific if you like
  }
}