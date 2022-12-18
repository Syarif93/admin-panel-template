import { Box, useColorMode } from '@chakra-ui/react'
import { FC, ReactNode, useContext, useRef } from 'react'
import { Scrollbar, ScrollbarPlugin } from 'smooth-scrollbar-react'
import type { Scrollbar as BaseScrollbar } from "smooth-scrollbar/scrollbar";
import AppContext from '../../config/app-context';

type MainProps = {
  children: ReactNode
}

const Main: FC<MainProps> = ({ children }) => {
  // Chakra
  const { colorMode } = useColorMode()

  const scrollbarRef = useRef<BaseScrollbar | null>(null);
  const { sidebar } = useContext(AppContext)

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
        maxWidth: `${sidebar === "hide" ? "100vw" : "calc(100vw - 280px)"}`,
        maxHeight: "calc(100vh - 70px)",
        padding: "20px",
        backgroundColor: `${colorMode === "light" ? "rgba(0, 0, 0, 0.06)" : "rgba(0, 0, 0, 0.48)"}`,
      }}
    >
      <main>
        {children}
      </main>
    </Scrollbar>
  )
}

export default Main