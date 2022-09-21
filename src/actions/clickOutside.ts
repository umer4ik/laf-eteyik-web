export function clickOutside(node: HTMLElement) {
  const handleClick = (event: MouseEvent) => {
    if (event.target) {
      if (node && !node.contains(event.target as HTMLElement) && !event.defaultPrevented) {
        node.dispatchEvent(new CustomEvent("click_outside", { bubbles: true, detail: node }));
      }
    }
    
  };

  document.addEventListener("click", handleClick, true);

  return {
    destroy() {
      document.removeEventListener("click", handleClick, true);
    }
  };
}
