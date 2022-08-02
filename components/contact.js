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
import Section from '../components/section'
import {IoLogoInstagram, IoLogoWhatsapp} from 'react-icons/io5'
import Paragraph from './paragraph'



const ContactUs = props => {
    return (
            <Container>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Haz tu pedido!
                        
                    </Heading>
                    <Paragraph>Por Whatsapp:</Paragraph>
                    <List>
                    <ListItem>
                            <Link
                                href={'https://wa.me/50684237860?text='+ props.msg}
                                target="_blank"
                            >
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<Icon as={IoLogoWhatsapp} />}
                                >
                                    8423 7860
                                </Button>
                            </Link>
                        </ListItem>
                        </List>
                        <Paragraph>...o a al Instagram!</Paragraph>
                        <List>
                        <ListItem>
                            <Link
                                href="https://www.instagram.com/LovelyThings/"
                                target="_blank"
                            >
                                <Button
                                    variant="ghost"
                                    colorScheme="teal"
                                    leftIcon={<Icon as={IoLogoInstagram} />}
                                >
                                    @LovelyThings
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                    </Section>
            </Container>
    )
}

export default ContactUs