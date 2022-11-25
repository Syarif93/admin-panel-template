import { Box, useColorMode } from '@chakra-ui/react'
import { FC } from 'react'

const Sidebar: FC = () => {
  const { colorMode } = useColorMode()

  return (
    <Box position="fixed" w={280} minHeight="calc(100vh-70px)" p="20px" overflowY="auto" boxShadow={colorMode === "dark" ? "dark-lg" : "lg"}>
      <aside>
        {Array(50).fill(null).map((_, index) => (
          <h1 key={index}>Test {index}</h1>
        ))}
      </aside>
    </Box>
  )
}

export default Sidebar