import { Grid, GridItem } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'
import Header from './header'
import Main from './main'
import Sidebar from './sidebar'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Grid
        templateAreas={`"header header"
                  "nav main"
                  "nav main"`}
        gridTemplateRows={'70px 1fr'}
        gridTemplateColumns={'280px 1fr'}
        h='100vh'
        w='100vw'
        gap='0'
      >
        <GridItem area={'header'}>
          <Header />
        </GridItem>
        <GridItem area={'nav'}>
          <Sidebar />
        </GridItem>
        <GridItem area={'main'}>
          <Main>{children}</Main>
        </GridItem>
      </Grid>
    </>
  )
}

export default Layout