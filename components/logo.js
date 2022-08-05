import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const rotate = keyframes`
from {
    transform rotate(0deg);
}
to {
    transform: rotate(-360deg);
}
`

const jumpAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
  }
`

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 60px;
    line-height: 20px;
    padding: 0px;
    animation-duration: 8s;
    &:hover {
        animation: 0.75s ${jumpAnimation};
    }
`
const Logo = () => {
    const footPrintImg = `/logos/logo${useColorModeValue('', '-dark')}.png`
    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image
                        src={footPrintImg}
                        width={40}
                        height={40}
                        alt="logo"
                        
                    />
                    <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily="M PLUS Rounded 1c"
                        fontWeight="bold"
                        ml={3}
                    >
                        Inicio
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo