import { Container, Heading, Link } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import ContactInfo from '../components/contactInfo'
import PageLayout from '../components/layouts/page_layout'

const Info = () => {
    return (
        <PageLayout>
        <Container>
            <Heading as="h3" variant="section-title" fontSize={20} mb={4}>
                Cómo puedo hacer un pedido?
            </Heading>
            <Section delay={0.1}>
                    <Paragraph>
                        Lovely Things ofrece contacto por Whatsapp, o la página de Instagram por mensaje directo para concretar pedidos. 😊
                    </Paragraph>
                    <Paragraph>
                        Además, desde la sección de{' '}<NextLink href="productos">
                            <Link>productos</Link>
                        </NextLink>, puedes ver el catálogo completo, con fácil acceso a los métodos de contacto para completar el pedido. 🧐
                    </Paragraph>
                    <ContactInfo/>
                </Section>
            <Heading as="h3" variant="section-title" fontSize={20} mb={4}>
                Ofrecen envíos a domicilio?
            </Heading>
            <Section delay={0.3}>
                    <Paragraph>
                        Actualmente Lovely Things no ofrece envíos a domicilio. Todos los pedidos se deben retirar en San Ramón, La Unión, Cartago. La dirección exacta se provee al finalizar el pedido. 🎁
                    </Paragraph>
                </Section>
                <Heading as="h3" variant="section-title" fontSize={20} mb={4}>
                Qué métodos de pago puedo utilizar?
            </Heading>
            <Section delay={0.5}>
                    <Paragraph>
                        Lovely Things únicamente acepta transferencias por SINPE. 💵
                    </Paragraph>
                </Section>
        </Container>
        </PageLayout>
    )
}

export default Info