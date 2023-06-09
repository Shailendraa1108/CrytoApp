import { Alert, AlertIcon } from '@chakra-ui/react'
import React from 'react'

function ErrorComponent({Message}) {
  return (
   <Alert 
   status='error'
   w={"container.lg"}
   position={"fixed"}
   bottom={"4"}
   left={"50%"}
   transform={"translate(-50%"}
   
   
   >
    <AlertIcon/>
    {Message}
   </Alert>
  )
}

export default ErrorComponent