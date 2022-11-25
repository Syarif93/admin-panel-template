import { Box } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'
import Sidebar from './sidebar'

type MainProps = {
  children: ReactNode
}

const Main: FC<MainProps> = ({ children }) => {
  return (
    <>
      <Sidebar />
      <Box ml={280} p="20px">
        <main>
          { children }
        </main>
      </Box>
    </>
  )
}

export default Main