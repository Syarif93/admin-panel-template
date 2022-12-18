import { extendTheme } from '@chakra-ui/react'
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      ".scrollbar-track.scrollbar-track-y": {
        "width": "12px",
        "backgroundColor": "transparent",
      },
      ".scrollbar-thumb.scrollbar-thumb-y": {
        "backgroundColor": mode("rgb(193, 193, 192)", "#fff"),
      },
    })
  }
})

export default theme