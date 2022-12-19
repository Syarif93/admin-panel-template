import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { FC, useRef } from 'react'
import { Scrollbar, ScrollbarPlugin } from 'smooth-scrollbar-react'
import type { Scrollbar as BaseScrollbar } from "smooth-scrollbar/scrollbar";
import { DashboardIcon } from '../icons';

const Sidebar: FC = () => {
  const scrollbarRef = useRef<BaseScrollbar | null>(null);
  const router = useRouter()

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
        width: "280px",
        overflowY: "auto",
        height: "calc(100vh - 70px)",
        padding: "20px",
        borderRight: "1px solid rgba(211, 211, 211, 0.25)",
      }}
    >
      <Button
        leftIcon={<DashboardIcon />}
        w="full"
        justifyContent="flex-start"
        onClick={() => router.push("/")}
      >
        Dashboard
      </Button>
      <Button
        leftIcon={<DashboardIcon />}
        w="full"
        justifyContent="flex-start"
        onClick={() => router.push("/test")}
      >
        Test
      </Button>
    </Scrollbar>
  )
}

export default Sidebar