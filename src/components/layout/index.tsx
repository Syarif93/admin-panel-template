import { Box, Grid, GridItem } from '@chakra-ui/react'
import { FC, ReactNode, useState } from 'react'
import AppContext, { Sidebar as SidebarType } from '../../config/app-context'
import Header from './header'
import Sidebar from './sidebar'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [sidebar, setSidebar] = useState<SidebarType>("show")

  return (
    <AppContext.Provider value={{ sidebar, setSidebar }}>
      <Grid
        templateAreas={`"header header"
                        "${sidebar === "hide" ? "main " : "nav "}main"
                        "${sidebar === "hide" ? "main " : "nav "}main"`}
        gridTemplateRows={'70px 1fr'}
        gridTemplateColumns={`${sidebar === "hide" ? "" : "280px "}1fr`}
        maxH='100vh'
        maxW='100vw'
        gap='0'
        overflow={"hidden"}
      >
        <GridItem area={'header'}>
          <Header />
        </GridItem>
        {sidebar === "hide"
          ? null
          : <GridItem area={'nav'}>
            <Sidebar />
          </GridItem>}
        <GridItem area={'main'}>
          <Box as='main' padding="20px" overflowX="hidden" overflowY="auto" h="calc(100vh - 70px)" scrollBehavior="smooth">
            {children}
          </Box>
        </GridItem>
      </Grid>
    </AppContext.Provider>
  )
}

export default Layout