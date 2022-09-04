export const scrollToView = (
  node: HTMLElement,
  behavior: ScrollBehavior = "smooth"
) => {
  const targetSelector = `#${node.getAttribute("id")}`;
  const targetElement = document.querySelector(targetSelector);

  if (!targetElement) return;

  const timeout = setTimeout(() => {
    targetElement.scrollIntoView({ behavior });
  }, 1000);

  return {
    destroy: () => {
      clearTimeout(timeout);
    },
  };
};
