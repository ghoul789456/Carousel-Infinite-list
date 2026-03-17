import React, { useRef, useEffect, useState } from "react";

export default function Img({ url }) {
  const imgRef = useRef(null);
  const defalutUrl = "/defalut.jpg";
  const [src, setSrc] = useState(defalutUrl);

  useEffect(() => {
    const imgObj = imgRef.current;
    if (!imgObj) return;

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      if (entry.isIntersecting) {
        setSrc(url);
        observer.unobserve(imgObj);
      }
    });

    observer.observe(imgObj);

    return () => observer.disconnect();
  }, [url]);

  return <img ref={imgRef} src={src} alt="" />;
}
