import { Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function ExchangesCard(props) {
  return (
    <a href='link' target={"blank"}>
    <VStack
        w={"52"}
        p={"8"}
        m={"4"}
        shadow={"lg"}
        borderRadius={"1rem"}
        transition={"all 0.3s"}
        css={{
            "&:hover":{
                transform:"scale(1.1)"
            }
        }}

    >
        <Image
        src={props.img}
        w={"10"}
        h={"10"}
        objectFit={"contain"}
        alt={"Exchange"}
         />
        <Heading size={"md"}>{props.rank}</Heading>
        <Text>
            {props.name}
        </Text>
    </VStack>
</a>
  )
}

export default ExchangesCard