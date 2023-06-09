import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

function Footer() {
    return (
        <Box bgColor={"blackAlpha.900"}
            color={"whiteAlpha.700"}
            minH={"48"}
            px={"19"}
            py={["16", "8"]}
           
        >
            <Stack   justifyContent={"space-between"} direction={["column", "row"]} alignItems={"center"} h={"full"}>
                <VStack width={"full"} alignItems={["center","flex-start"]}>
                    <Text fontWeight={"bold"} textAlign={["center","lelf"]}>About Us</Text>
                    <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center","left"]}>We are he best crypo trading in india , we provide our guidence at a very cheap price</Text>
                </VStack>
                <VStack>
                    <Avatar boxSize={"28"} mt={["4", "0"]} />
                    <Text>Our Founders</Text>
                </VStack>
            </Stack>


        </Box>
    )
}

export default Footer