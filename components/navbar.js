import NextLink from 'next/link'

import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'

import Logo from './logo.js'
import {HamburgerIcon} from '@chakra-ui/icons'

const LinkItem = ({ href, path, children }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')

    return (
        <NextLink href={href} passHref>
            <Link
                p={2}
                bg={active ? 'grassTeal' : undefined}
                color={active ? '#202023' : inactiveColor}
            >
                {children}
            </Link>
        </NextLink>
    )
}


const Navbar = props => {
    const { path } = props

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('ffffff40', '#20202380')}
            style={{ backdropFilter: 'blur(5px)' }}
            zIndex={1}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                wrap="wrap"
                align="center"
                justify={'space-between'}
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 5, nmd: 0 }}
                >
                    <LinkItem href="/productos" path={path}>
                        Productos
                    </LinkItem>
                    <LinkItem href="/info" path={path}>
                        Información / FAQ
                    </LinkItem>
                    
                </Stack>
                <Box flex={1} align="right" marginTop={3}>
                    {/*<ThemeToggleButton />*/}
                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"
                            />
                            <MenuList>
                                <NextLink href="/productos" passHref>
                                    <MenuItem as={Link}>Productos</MenuItem>
                                </NextLink>
                                <NextLink href="/info" passHref>
                                    <MenuItem as={Link}>Información</MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar