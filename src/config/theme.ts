import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      "#my-scrollbar": {
        width: "500px",
        height: "500px",
        overflow: "auto",
      }
    }
  }
})

export default theme