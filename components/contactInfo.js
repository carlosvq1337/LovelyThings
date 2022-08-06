import {
    Container,
    Heading,
    Link,
    Button,
    List,
    Icon,
    ListItem
} from '@chakra-ui/react'
import React from 'react'
import Section from './section'
import {IoLogoInstagram, IoLogoWhatsapp} from 'react-icons/io5'
import Paragraph from './paragraph'

const ContactInfo = () => {
    return (
            <Container>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Contáctanos 
                    </Heading>
                    <Paragraph>Al Whatsapp...</Paragraph>
                    <List>
                    <ListItem>
                            <Link
                                href={'https://wa.me/50687047291'}
                                target="_blank"
                            >
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<Icon as={IoLogoWhatsapp} />}
                                >
                                    8704 7291
                                </Button>
                            </Link>
                        </ListItem>
                        </List>
                        <Paragraph>...o al Instagram!</Paragraph>
                        <List>
                        <ListItem>
                            <Link
                                href="https://www.instagram.com/lovely_things_506/"
                                target="_blank"
                            >
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<Icon as={IoLogoInstagram} />}
                                >
                                    @Lovely_Things_506
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                    </Section>
            </Container>
    )
}

export default ContactInfo