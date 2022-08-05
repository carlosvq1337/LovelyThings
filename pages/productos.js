import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { ProductGridItem } from '../components/gridItem'
import {
    img_chanclas,
    img_chanclas2
} from '../public/products'

import PageLayout from '../components/layouts/page_layout'

const Products = () => {
    return (
        <PageLayout>
        <Container>
            <Heading as="h3" variant="section-title" fontSize={20} mb={4}>
                Amigurumis
            </Heading>
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
            <Heading as="h3" variant="section-title" fontSize={20} mb={4}>
                Otros
            </Heading>
        </Container>
        </PageLayout>
    )
}

export default Products