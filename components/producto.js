import NextLink from 'next/link'
import { Heading, Box, Image } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Container, Badge, Link } from '@chakra-ui/react'
import ContactProduct from './contactProduct'
import Paragraph from './paragraph'

const Title = ({ children }) => (
    <Box>
        <NextLink href="/productos">
            <Link>Productos</Link>
        </NextLink>

        <span>
            &nbsp;
            <ChevronRightIcon />
            &nbsp;
        </span>
        <Heading display="inline-block" as="h3" fontSize="20" mb={4}>
            {children}
        </Heading>
    </Box>
)

const ProductImage = ({ src, alt }) => (
    <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

const Meta = ({ children }) => (
    <Badge colorScheme="green" mr={1}>
        {children}
    </Badge>
)

const Size = ({ children }) => (
    <Badge colorScheme="yellow" mr={1} ml={1}>
        {children}
    </Badge>
)

const Price = ({ children }) => (
    <Badge colorScheme="purple" mr={1} ml={1}>
        {children}
    </Badge>
)
const Producto = props => {
    return (
        <Container>
            <Title>{props.name}</Title>
            <ProductImage src={props.imgSrc} alt={props.name} />

            <Paragraph>{props.description}</Paragraph>

            <Meta>{props.status}</Meta>
            <Price>{props.price}</Price>
            <Size>{props.size}</Size>

            <ContactProduct msg={props.waMsg} />
        </Container>
    )
}

export default Producto
