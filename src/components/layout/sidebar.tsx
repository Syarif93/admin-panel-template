import { Box, Button, useColorMode } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { FC, useContext, useRef } from 'react'
import { Scrollbar, ScrollbarPlugin } from 'smooth-scrollbar-react'
import type { Scrollbar as BaseScrollbar } from "smooth-scrollbar/scrollbar";
import AppContext from 'src/config/app-context';
import { DashboardIcon } from '../icons';

const Sidebar: FC = () => {
  const scrollbarRef = useRef<BaseScrollbar | null>(null);
  const router = useRouter()
  const { colorMode } = useColorMode()
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
      style={{
        display: sidebar === "show" ? "block" : "none",
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "280px",
        overflowY: "auto",
        height: "calc(100vh - 70px)",
        marginTop: "70px",
        padding: "20px",
        backgroundColor: colorMode === "light" ? "#fff" : "#1A202C",
        boxShadow: colorMode === "light" ? "0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05)" : "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px,rgba(0, 0, 0, 0.2) 0px 5px 10px,rgba(0, 0, 0, 0.4) 0px 15px 40px"
      }}
    >
      <Button
        leftIcon={<DashboardIcon />}
        w="full"
        justifyContent="flex-start"
        variant={router.pathname === "/" ? "solid" : "ghost"}
        onClick={() => router.push("/")}
      >
        Dashboard
      </Button>
      <Box h="3px" />
      <Button
        leftIcon={<DashboardIcon />}
        w="full"
        justifyContent="flex-start"
        variant={router.pathname === "/test" ? "solid" : "ghost"}
        onClick={() => router.push("/test")}
      >
        Test
      </Button>
    </Scrollbar>
  )
}

export default Sidebar