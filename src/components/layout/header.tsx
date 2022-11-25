import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Box, Flex, IconButton, useColorMode } from '@chakra-ui/react'
import { FC } from 'react'

const Header: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <header>
      <Box h={70} boxShadow={colorMode === "dark" ? "dark-lg" : "lg"} px="24px">
        <Flex h={70} justify={'space-between'} alignItems={'center'}>
          <Box color="brand.greySecondary">Left</Box>
          <Box>
            {colorMode === "light" ? (
              <IconButton
                variant="ghost"
                aria-label='Dark'
                onClick={toggleColorMode}
                icon={<MoonIcon />}
              />
            ) : (
              <IconButton
                variant="ghost"
                aria-label='Light'
                onClick={toggleColorMode}
                icon={<SunIcon />}
              />
            )}
          </Box>
        </Flex>
      </Box>
    </header>
  )
}

export default Header