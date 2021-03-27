export const showHide = (id: string): void => {
  if (typeof document !== 'undefined') {
    const element = document.getElementById(id);

    if (element) {
      element.style.display = element.style.display === 'none' ? '' : 'none';
    }
  }
};
