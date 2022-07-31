import NextLink from 'next/link'
import {
    Box,
    Heading,
    Text,
    Container,
    Divider,
    Button
} from '@chakra-ui/react'
import PageLayout from '../components/layouts/page_layout'

const NotFound = () => {
    return (
        <PageLayout>
            <Container>
                <Heading as="h1">Error 👷‍♂️🚧</Heading>
                <Text>La página que busca se encuentra bajo construcción.</Text>
                <Divider my={6} />

                <Box my={6} align="center">
                    <NextLink href="/">
                        <Button colorScheme="teal">Volver a la página principal</Button>
                    </NextLink>
                </Box>
            </Container>
        </PageLayout>
        
    )
}

export default NotFound