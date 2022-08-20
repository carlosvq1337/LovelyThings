import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { ProductGridItem } from '../components/gridItem'
import {
    img_bebes_grande,
    img_bebes_med,
    img_bebes_peq,
    img_cacatua,
    img_cupcakes,
    img_guacamaya,
    img_hormigas,
    img_macimales,
    img_ovejas,
    img_perros
} from '../public/products'

import PageLayout from '../components/layouts/page_layout'

const Products = () => {
    return (
        <PageLayout>
            <Container>
                <Heading as="h3" variant="section-title" fontSize={20} mb={4}>
                    Amigurumis
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay={0.1}>
                        <ProductGridItem
                            id="guacamaya"
                            title="Guacamaya"
                            thumbnail={img_guacamaya}
                        >
                            18 000 CRC
                        </ProductGridItem>
                    </Section>
                    <Section delay={0.2}>
                        <ProductGridItem
                            id="cacatua"
                            title="Cacatúa"
                            thumbnail={img_cacatua}
                        >
                            17 000 CRC
                        </ProductGridItem>
                    </Section>
                    <Section delay={0.3}>
                        <ProductGridItem
                            id="hormigas"
                            title="Hormigas"
                            thumbnail={img_hormigas}
                        >
                            16 500 CRC
                        </ProductGridItem>
                    </Section>

                    <Section delay={0.4}>
                        <ProductGridItem
                            id="ovejas"
                            title="Ovejas"
                            thumbnail={img_ovejas}
                        >
                            6 000 CRC
                        </ProductGridItem>
                    </Section>
                    <Section delay={0.5}>
                        <ProductGridItem
                            id="cupcakes"
                            title="Cupcakes"
                            thumbnail={img_cupcakes}
                        >
                            4 500 CRC
                        </ProductGridItem>
                    </Section>
                    <Section delay={0.6}>
                        <ProductGridItem
                            id="bebes_grande"
                            title="Bebé (grande)"
                            thumbnail={img_bebes_grande}
                        >
                            8 000 CRC
                        </ProductGridItem>
                    </Section>
                    <Section delay={0.7}>
                        <ProductGridItem
                            id="bebes_peq"
                            title="Bebés (pequeño)"
                            thumbnail={img_bebes_peq}
                        >
                            5 000 CRC
                        </ProductGridItem>
                    </Section>
                    <Section delay={0.8}>
                        <ProductGridItem
                            id="bebes_mediano"
                            title="Bebés (med)"
                            thumbnail={img_bebes_med}
                        >
                            6 000 CRC
                        </ProductGridItem>
                    </Section>
                    <Section delay={0.9}>
                        <ProductGridItem
                            id="perros"
                            title="Perritos"
                            thumbnail={img_perros}
                        >
                            5 000 CRC
                        </ProductGridItem>
                    </Section>
                    <Section delay={0.9}>
                        <ProductGridItem
                            id="macimales"
                            title="Macetas Animales"
                            thumbnail={img_macimales}
                        >
                            7 000 CRC
                        </ProductGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </PageLayout>
    )
}

export default Products
