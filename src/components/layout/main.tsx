import { Box } from '@chakra-ui/react'
import { FC, ReactNode, useRef } from 'react'
import { Scrollbar, ScrollbarPlugin } from 'smooth-scrollbar-react'
import type { Scrollbar as BaseScrollbar } from "smooth-scrollbar/scrollbar";

type MainProps = {
  children: ReactNode
}

const Main: FC<MainProps> = ({ children }) => {
  const scrollbarRef = useRef<BaseScrollbar | null>(null);

  return (
    <Scrollbar
      ref={scrollbarRef}
      plugins={{
        overscroll: {
          effect: "bounce"
        } as ScrollbarPlugin
      }}
      continuousScrolling={true}
      alwaysShowTracks={true}
      style={{
        overflowY: "auto",
        overflowX: "hidden",
        maxWidth: "calc(100vw - 280px)",
        maxHeight: "calc(100vh - 70px)",
        padding: "20px",
      }}
    >
      <main>
        {children}
      </main>
    </Scrollbar>
  )
}

export default Main