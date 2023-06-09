
import { Box, Spinner, VStack } from '@chakra-ui/react'
import React from 'react'

function Loader() {
  return (
 <VStack justifyContent={"center"} h={"90vh"}>
    <Box transform={"scale(3)"} >
        <Spinner size={"xl"}/>
    </Box>
 </VStack>
  )
}

export default Loader














// import { Box, Spinner, VStack } from '@chakra-ui/react'
// import React from 'react'

// function Loader() {
//   return (
//    <VStack h={"90vh"} justifyContent={"center"}>
//     <Box transform={"scale(3)"}>
//         <Spinner size={"xl"}/>
//     </Box>

//    </VStack>
//   )
// }

// export default Loader