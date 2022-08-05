import PageLayout from '../components/layouts/page_layout'
import {
    Container,
    Box,
    Heading,
    Image,
    useColorModeValue,
    Button,
	SimpleGrid
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { ProductGridItem } from '../components/gridItem'
import Section from '../components/section'
import {
    img_chanclas,
    img_chanclas2
} from '../public/products'

const Page = () => {
    return (
        <PageLayout>
			<Container>




                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Lovely Things ❤️
                        </Heading>
                        <p>
							Tienda de Amigurumis, tejidos, manualidades...
                        </p>
                    </Box>
                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        align="center"
                    >
                        <Image
                            maxWidth="100px"
                            display="inline-block"
                            src="/logos/logo.png"
                            alt="Logo"
                        />
                    </Box>
                </Box>
				
				<Box
                    borderRadius="lg"
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                    p={3}
                    mb={6}
                    align="center"
                >
                    Slogan
                </Box>


				<SimpleGrid columns={[1,1,2]} gap={6}>
                <Section delay={0.1}>
                    <ProductGridItem id="chanclas" title="Chanclas" thumbnail={img_chanclas}>
                        1 000 USD
                    </ProductGridItem>
                </Section>
                <Section delay={0.2}>
                    <ProductGridItem id="chanclas2" title="Chanclas 2" thumbnail={img_chanclas2}>
                        2 000 USD
                    </ProductGridItem>
                </Section>
            </SimpleGrid>

				<Box align="center" my={4}>
                        <NextLink href="/productos">
                            <Button
                                rightIcon={<ChevronRightIcon />}
                                colorScheme="teal"
                            >
                                Más Productos
                            </Button>
                        </NextLink>
                    </Box>

			</Container>
		</PageLayout>
    )
}

export default Page