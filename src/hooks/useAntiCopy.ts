import { useEffect } from 'react';

function disableEvent(event: Event): boolean {
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
  return false;
}

export function useAntiCopy(): void {
  useEffect(() => {
    document.addEventListener('selectstart', disableEvent);
    document.addEventListener('contextmenu', disableEvent);

    return () => {
      document.removeEventListener('selectstart', disableEvent);
      document.removeEventListener('contextmenu', disableEvent);
    };
  }, []);
}
