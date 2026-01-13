import HeroSection from "./components/HeroSection";
import Header from "./components/Header";

import "./App.css";
import VirtualList from "./components/VirtualList";

function App() {
  const itemList = Array.from({ length: 5000 }, (_, index) => `Item ${index + 1}`);

  return (
    <div>
      <>
        <VirtualList list={itemList}></VirtualList>
      </>
    </div>
  );
}

export default App;
