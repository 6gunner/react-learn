let onLine = navigator.onLine;
export function getSnapshot() {
  return onLine;
}
export function subscribe(callback: () => void) {
  function updateOnlineStatus() {
    onLine = navigator.onLine;
    callback();
  }
  window.addEventListener("online", updateOnlineStatus);
  window.addEventListener("offline", updateOnlineStatus);
  return () => {
    window.removeEventListener("online", updateOnlineStatus);
    window.removeEventListener("offline", updateOnlineStatus);
  };
}
