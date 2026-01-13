import { useSyncExternalStore } from "react";

import { subscribe, getSnapshot } from "./onlineStore";

function useOnlineStatus() {
  return useSyncExternalStore(subscribe, getSnapshot);
}

export function ChatIndicator() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
}
