import NextLink from 'next/link'
import { Heading, Box, Image} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Container, Badge, Link} from '@chakra-ui/react'
import ContactUs from './contact'

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

const ProductImage = ({src, alt}) => (
    <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4}/>
)

const Meta = ({children}) => (
    <Badge colorScheme="green" mr={2}>
        {children}
    </Badge>
)


const Producto = props => {
    return (
            <Container>
                <Title>
                    {props.name} - <Meta>{props.status}</Meta><Badge>{props.price} CRC</Badge>
                </Title>
                <ProductImage
                    src={props.imgSrc}
                    alt={props.name}
                />
            
                <ContactUs msg={props.waMsg}/>
            </Container>
    )
}

export default Producto