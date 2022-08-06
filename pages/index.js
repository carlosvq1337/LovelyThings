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
    img_cacatua,
    img_guacamaya,
    img_hormigas,
    img_ovejas
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
                    &ldquo;Dios todo lo hizo hermoso en su tiempo&rdquo;
                    <br></br>
                    Eclesiastés 3: 11a
                </Box>


				<SimpleGrid columns={[1,1,2]} gap={6}>
                <Section delay={0.1}>
                    <ProductGridItem id="hormigas" title="" thumbnail={img_hormigas}>
                    </ProductGridItem>
                </Section>
                <Section delay={0.2}>
                    <ProductGridItem id="guacamaya" title="" thumbnail={img_guacamaya}>
                    </ProductGridItem>
                </Section>
                <Section delay={0.2}>
                    <ProductGridItem id="cacatua" title="" thumbnail={img_cacatua}>
                    </ProductGridItem>
                </Section>
                <Section delay={0.2}>
                    <ProductGridItem id="ovejas" title="" thumbnail={img_ovejas}>
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