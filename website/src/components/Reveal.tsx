import type { CSSProperties, ReactNode, RefObject } from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";

/** Fades+lifts a block into place once scrolled into view (Framer Motion's useInView; respects reduced-motion via CSS). */
export default function Reveal({
  children,
  className = "",
  as: Tag = "div",
  row = false,
  style,
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
  /** stagger children in one at a time instead of animating the wrapper as one block */
  row?: boolean;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref as RefObject<Element>, { once: true, margin: "-80px" });

  return (
    <Tag
      ref={ref as any}
      className={`${row ? "reveal-row" : "reveal"} ${inView ? "in" : ""} ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  );
}
