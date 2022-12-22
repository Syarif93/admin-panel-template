import { HamburgerIcon, MoonIcon, Search2Icon, SettingsIcon, SunIcon } from '@chakra-ui/icons'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Avatar, Box, Button, Center, Divider, Flex, IconButton, Input, InputGroup,
  InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Stack,
  useColorMode,
  useDisclosure
} from '@chakra-ui/react'
import { FC, useContext, useRef } from 'react'
import AppContext from '../../config/app-context'
import { LogoutIcon } from '../icons'

const Header: FC = () => {
  const cancelRef = useRef<any>()

  // Chakra
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()

  // Context
  const { sidebar, setSidebar } = useContext(AppContext)

  return (
    <>
      <Box as='header' h={70} boxShadow={colorMode === "dark" ? "dark-lg" : "lg"} px="24px">
        <Flex h={70} justify={'space-between'} alignItems={'center'}>
          <Flex pr="20px" w="260px" h="100%" justify={'space-between'} alignItems={'center'}>
            <Box color="brand.greySecondary">Logo</Box>
            <IconButton
              variant="ghost"
              aria-label='Light'
              onClick={() => {
                if (sidebar === "show") {
                  setSidebar("hide")
                } else if (sidebar === "hide") {
                  setSidebar("show")
                }
              }}
              icon={<HamburgerIcon />}
            />
          </Flex>
          <Flex pl="20px" justify={'space-between'} alignItems={'center'} w="calc(100% - 260px)" h="full">
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                children={<Search2Icon color='gray.300' />}
              />
              <Input placeholder='Masukkan pencarian...' size="md" w={280} />
            </InputGroup>
            <Stack direction="row" alignItems="center" spacing={5}>
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
              <Center height='30px'>
                <Divider orientation='vertical' />
              </Center>
              <Menu autoSelect={false}>
                <MenuButton as="button">
                  <Avatar name='Moh Sarifudin' size="sm" />
                </MenuButton>
                <MenuList px="5px">
                  <MenuItem>
                    <Box mr="12px">
                      <Avatar name='Moh Sarifudin' size="xs" />
                    </Box>
                    <span>Profil</span>
                  </MenuItem>
                  <MenuItem>
                    <Box mr="12px">
                      <SettingsIcon boxSize="24px" />
                    </Box>
                    <span>Pengaturan</span>
                  </MenuItem>
                  <Divider my="10px" />
                  <MenuItem onClick={onOpen}>
                    <Box mr="12px">
                      <LogoutIcon />
                    </Box>
                    <span>Keluar</span>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='2xl' fontWeight='bold'>
              Keluar
            </AlertDialogHeader>

            <AlertDialogBody>
              Sesi anda akan di hapus, yakin?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Tidak
              </Button>
              <Button colorScheme='red' ml={3}>
                Ya
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default Header