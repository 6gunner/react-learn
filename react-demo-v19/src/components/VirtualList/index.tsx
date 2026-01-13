import React, { useCallback, useEffect, useRef } from "react";
import { useStyle } from "./style";

interface VirtualListProps<T> {
  list: Array<T>;
}

function VirtualList(props: VirtualListProps<any>) {
  const { styles } = useStyle();

  const { list } = props;

  const count = list.length;

  const itemHeight = 50; // Example fixed height for each item

  const gap = 5;

  const bufferSize = 2;

  const totalHeight = count * (itemHeight + gap) - gap;

  const containerRef = useRef<HTMLDivElement>(null);

  const [startIndex, setStartIndex] = React.useState(0);
  const [endIndex, setEndIndex] = React.useState(10);
  const [scrollTop, setScrollTop] = React.useState(0);

  const handleScroll = useCallback(() => {
    const scrollTop = containerRef.current?.scrollTop || 0;
    const newStartIndex = Math.floor(scrollTop / (itemHeight + gap));
    setStartIndex(newStartIndex);
    setScrollTop(scrollTop);
  }, [itemHeight]);

  useEffect(() => {
    const containerHeight = containerRef.current?.clientHeight || 0;
    const visibleCount = Math.ceil(containerHeight / (itemHeight + gap));
    const newEndIndex = startIndex + visibleCount + 1 + bufferSize;
    setEndIndex(newEndIndex); // +1 for buffer
  }, [startIndex, itemHeight]);

  const visibleItems = list.slice(startIndex, endIndex);

  return (
    <div ref={containerRef} className={styles.container} onScroll={handleScroll}>
      <div className={styles.fakeContainer} style={{ height: totalHeight }}></div>
      <div
        className={styles.content}
        style={{ transform: `translateY(${startIndex * (itemHeight + gap)}px)` }}
      >
        {visibleItems.map((item, index) => (
          <div key={index + startIndex} className={styles.listItem}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default VirtualList;
