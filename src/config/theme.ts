import { extendTheme } from '@chakra-ui/react'
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      ".scrollbar-track.scrollbar-track-y": {
        "width": "12px",
        "background-color": "transparent",
      },
      ".scrollbar-thumb.scrollbar-thumb-y": {
        "background-color": mode("rgb(193, 193, 192)", "#fff"),
      },
    })
  }
})

export default theme