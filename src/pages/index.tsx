import React, { useRef } from 'react'
import { Scrollbar, ScrollbarPlugin } from 'smooth-scrollbar-react'
import type { Scrollbar as BaseScrollbar } from "smooth-scrollbar/scrollbar";
import Meta from 'src/config/Meta';

export default function Home() {
  const scrollbarRef = useRef<BaseScrollbar | null>(null);

  return (
    <>
      <Meta />
      <div>
        {Array(100).fill(null).map((_, index) => (
          <p key={index}>{"text " + index}</p>
        ))}
      </div>
    </>
  )
}
