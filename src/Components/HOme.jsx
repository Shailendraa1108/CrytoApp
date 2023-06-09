import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import img1 from "../assets/6625241.jpg"
import {motion} from "framer-motion"

function HOme() {
  return (
  <Box bgColor={"#32CD32"} w={"full"} >
    <motion.div
  
    animate={{
      translateY:"20px"
    }}
    transition={{
      duration:2,
      repeat:Infinity,
      repeatType:"reverse"
      
    }}
    >
  <Image
      src={img1}
      w={"full"} 
      h={"full"}
      objectFit={"contain"}
      />
    </motion.div>
    
     

    </Box>
  )
}

export default HOme