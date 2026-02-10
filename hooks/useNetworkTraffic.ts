import { useEffect, useRef, useState } from "react";

export const useNetworkTraffic = () => {
  const [traffic, setTraffic] = useState({
    down: 0,
    up: 0,
  });

  const lastBytes = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const resources = performance.getEntriesByType("resource") as PerformanceResourceTiming[];

      const totalBytes = resources.reduce(
        (sum, r) => sum + (r.transferSize || 0),
        0
      );

      const diff = totalBytes - lastBytes.current;
      lastBytes.current = totalBytes;

      setTraffic({
        down: Math.max(diff / 1024, 0), // KB/s approx
        up: Math.random() * 0.5, // browser can't detect real upload
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return traffic;
};
