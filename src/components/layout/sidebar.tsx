import { useColorMode } from '@chakra-ui/react'
import { FC, useRef } from 'react'
import {Scrollbar, ScrollbarPlugin} from 'smooth-scrollbar-react'
import type { Scrollbar as BaseScrollbar } from "smooth-scrollbar/scrollbar";

const Sidebar: FC = () => {
  const { colorMode } = useColorMode()
  const scrollbarRef = useRef<BaseScrollbar | null>(null);

  return (
    <Scrollbar
      ref={scrollbarRef}
      plugins={{
        overscroll: {
          effect: "bounce"
        } as ScrollbarPlugin
      }}
      style={{
        position: "fixed",
        width: "280px",
        overflowY: "auto",
        height: "calc(100vh - 70px)",
        padding: "20px",
        borderRight: "1px solid rgba(211, 211, 211, 0.25)",
      }}
    >
      <aside>
        {Array(25).fill(null).map((_, index) => (
          <h1 key={index}>Test {index}</h1>
        ))}
      </aside>
    </Scrollbar>
  )
}

export default Sidebar