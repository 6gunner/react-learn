import { Route, Routes } from "react-router";
import "./App.css";

import IntersectionObserverDemo from "./pages/IntersectionObserverDemo";
import VirtualListDemo from "./pages/VirtualListDemo";

function App() {
  return (
    <Routes>
      <Route path="/intersection-observer" element={<IntersectionObserverDemo />} />
      <Route path="/virtual-list" element={<VirtualListDemo />} />
    </Routes>
  );
}

export default App;
