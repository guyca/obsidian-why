import { useEffect, useRef } from 'react';

type Props = {
  text: string;
};

export const AnimatedSegment = ({ text }: Props) => {
  const nodeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const id = setTimeout(() => {
      if (nodeRef.current) nodeRef.current.className = 'fade-up-entered';
    }, 100);
    return () => clearInterval(id);
  }, []);

  return (
    <span ref={nodeRef} className={`fade-up`}>
      {text}
    </span>
  );
};
