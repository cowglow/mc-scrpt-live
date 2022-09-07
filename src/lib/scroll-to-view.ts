export const scrollToView = (node: HTMLElement, behavior: ScrollBehavior = "smooth") => {
  const targetSelector = `#${node.getAttribute("id")}`;
  const targetElement = document.querySelector(targetSelector);

  if (!targetElement) return;

  const timeout = setTimeout(() => {
    let offset = 88;
    window.scrollTo({
      top: targetElement.getBoundingClientRect().top - offset,
      behavior
    });
  }, 1000);

  return {
    destroy: () => {
      clearTimeout(timeout);
    }
  };
};
