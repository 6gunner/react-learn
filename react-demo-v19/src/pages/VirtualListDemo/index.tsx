import VirtualList from "@/components/VirtualList";

function VirtualListDemo() {
  const itemList = Array.from({ length: 5000 }, (_, index) => `Item ${index + 1}`);

  return (
    <>
      <VirtualList list={itemList}></VirtualList>
    </>
  );
}

export default VirtualListDemo;
