import React, { useCallback, useEffect } from "react";
import { useStyles } from "./style";
import { produce } from "immer";
interface AdData {
  bgcolor: string;
  title: string;
  body: string;
}

interface AdDataWithTimer extends AdData {
  visible?: boolean;
  startTime?: number; // 最后一次开始可见的时间戳
  lastViewTime?: number; // 上次可见时长
  totalViewTime?: number; // 累计可见时长
  totalViewTimeText?: string;
}

const ALL_DATAS: AdData[] = [
  {
    bgcolor: "#cceecc",
    title: "Eat Green Beans",
    body: "Make your mother proud—they're good for you!",
  },
  {
    bgcolor: "aquamarine",
    title: "MillionsOfFreeBooks.whatever",
    body: "Read classic literature online free!",
  },
  {
    bgcolor: "lightgrey",
    title: "3.14 Shades of Gray: A novel",
    body: "Love really does make the world go round…",
  },
  {
    bgcolor: "#ffeeee",
    title: "Flexbox Florist",
    body: "When life's layout gets complicated, send flowers.",
  },
];

export default function IntersectionObserverDemo() {
  const { styles } = useStyles();

  const [ads, setAds] = React.useState<AdData[]>(ALL_DATAS.slice(0, 3));
  const visibleAds = React.useRef<Map<string, AdDataWithTimer>>(new Map());

  // 触发re-render
  const [, setTick] = React.useState<number>(0);

  const contentBoxRef = React.useRef<HTMLElement>(null);

  const replaceAd = (adId: string) => {
    const newAd = ALL_DATAS[Math.floor(Math.random() * ALL_DATAS.length)];
    setAds(prevAds => {
      const adIndex = Number(adId);
      const newAds = [...prevAds];
      newAds[adIndex] = newAd;
      return newAds;
    });
    visibleAds.current.delete(adId);
  };

  const intersectionCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        const adBox = entry.target as HTMLElement;
        const adId = adBox.getAttribute("data-ad-id");
        if (!adId) return;
        const adData = ads[Number(adId)];
        const visbleAdData = visibleAds.current.get(adId) || { ...adData };
        if (entry.isIntersecting) {
          if (entry.intersectionRatio >= 0.75) {
            const startTime = entry.time;
            visibleAds.current.set(adId, { ...visbleAdData, startTime, visible: true });
          }
        } else {
          visibleAds.current.set(adId, {
            ...visbleAdData,
            visible: false,
            startTime: 0,
            lastViewTime: visbleAdData?.totalViewTime || 0,
          });
          console.log("ad not visible", adId, "lastViewTime", visbleAdData?.totalViewTime);
          if (entry.intersectionRatio === 0.0 && Number(visbleAdData?.totalViewTime) >= 30000) {
            replaceAd(adId);
          }
        }
      });
    },
    [ads]
  );

  // 更优雅的方式：在ads渲染完成后，通过DOM查询找到所有ad元素并观察
  useEffect(() => {
    if (!contentBoxRef.current || ads.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: [0.0, 0.75],
    };

    const observer = new IntersectionObserver(intersectionCallback, observerOptions);

    // 查询所有ad元素并观察
    const adElements = contentBoxRef.current.querySelectorAll(".ad");
    adElements.forEach(ad => {
      observer.observe(ad);
    });

    return () => {
      observer.disconnect();
    };
  }, [ads, intersectionCallback]); // 当ads变化时重新观察

  const renderAddBox = (index: number) => {
    const id = index / 2;
    const adData = ads[id];
    const visibleAdData = visibleAds.current.get(id.toString());
    if (adData === undefined) {
      return null;
    }
    return (
      <div
        className="ad"
        key={`ad-${id}`}
        id={`ad-${id}`}
        data-ad-id={id}
        style={{ backgroundColor: adData.bgcolor, padding: "20px", margin: "20px 0" }}
      >
        <h3>{adData.title}</h3>
        <p>{adData.body}</p>
        {visibleAdData && <div className="timer">{visibleAdData?.totalViewTimeText || "0:00"}</div>}
      </div>
    );
  };

  // 统计timer
  const updateTime = useCallback(() => {
    const currentTime = performance.now();
    // Map 需要使用 forEach 或 entries() 来遍历，不能用 Object.entries()
    visibleAds.current.forEach(adData => {
      const startTime = adData.startTime || 0;
      debugger;
      if (adData.visible) {
        const elapsed = currentTime - startTime;
        const totalViewTime = (adData.lastViewTime || 0) + elapsed;
        const minutes = Math.floor(totalViewTime / 60000);
        const seconds = Math.floor((totalViewTime % 60000) / 1000);
        const timeText = `${minutes}:${seconds.toString().padStart(2, "0")}`;
        adData.totalViewTimeText = timeText;
        adData.totalViewTime = totalViewTime;
      }
    });
    setTick(tick => tick + 1);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateTime();
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <header>
        <h1>A Fake Blog</h1>
        <h2>Showing Intersection Observer in action!</h2>
      </header>

      <aside>
        <nav>
          <ul>
            <li>
              <a href="#link1">A link</a>
            </li>
            <li>
              <a href="#link2">Another link</a>
            </li>
            <li>
              <a href="#link3">One more link</a>
            </li>
          </ul>
        </nav>
      </aside>

      <main ref={contentBoxRef}>
        {Array.from({ length: 5 }).map((_, index) => (
          <React.Fragment key={index}>
            <article id={index.toString()}>
              <h2>Blog Post #{index + 1}</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at sem diam.
                Vestibulum venenatis massa in tincidunt egestas. Morbi eu lorem vel est sodales
                auctor hendrerit placerat risus. Etiam rutrum faucibus sem, vitae mattis ipsum
                ullamcorper eu. Donec nec imperdiet nibh, nec vehicula libero. Phasellus vel
                malesuada nulla. Aliquam sed magna aliquam, vestibulum nisi at, cursus nunc.
              </p>
            </article>
            {index % 2 === 0 && renderAddBox(index)}
          </React.Fragment>
        ))}
      </main>
    </div>
  );
}
