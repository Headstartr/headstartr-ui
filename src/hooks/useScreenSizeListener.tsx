import { useSyncExternalStore } from 'react';

function subscribe(callback: () => void) {
  window.addEventListener('resize', callback);

  return () => {
    window.removeEventListener('resize', callback);
  };
}

function getSnapshot() {
  return window.innerWidth < 1024;
}

function getServerSnapshot() {
  return true; // Always show "Online" for server-generated HTML
}

export default function useScreenResizeListener() {
  const isScreenWidthSmallerThan1024 = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );
  return { isScreenWidthSmallerThan1024 };
}
