import { Box, Spinner } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box>
      {Array(100).fill(null).map((_, index) => (
        <p>{"text " + index}</p>
      ))}
    </Box>
  )
}
