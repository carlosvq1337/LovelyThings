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
            <Heading as="h3" fontSize={20} mb={4}>
                Projects and Papers
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section delay={0.1}>
                    <ProductGridItem id="web-dev-guide" title="Web Development Guide" thumbnail={img_chanclas}>
                        Chanclas
                    </ProductGridItem>
                </Section>
                <Section delay={0.2}>
                    <ProductGridItem id="dockerized-mern" title="Dockerized MERN" thumbnail={img_chanclas2}>
                        Chanclas 2
                    </ProductGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </PageLayout>
    )
}

export default Products