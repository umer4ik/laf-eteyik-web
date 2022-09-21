import { browser } from "$app/environment";

export function renderInRoot(node: HTMLElement) {
  if (!browser) return
  const root = document.getElementById('root')
  if (root) {
    root.appendChild(node)
  }

  return {
    destroy() {
      if (!browser) return
      if (root) {
        if (Array.from(root.children).some(x => x === node)) {
          document.getElementById('root')?.removeChild(node)
        }
      }
    }
  };
}
