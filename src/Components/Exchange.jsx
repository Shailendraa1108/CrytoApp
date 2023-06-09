import React, { useEffect, useState } from 'react'
import { server } from '../index'
import axios from "axios"
import { Box, Container, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react'
import ExchangesCard from './ExchangesCard'
import Loader from './Loader'
import ErrorComponent from './ErrorComponent'
import { motion } from "framer-motion"

function Exchange() {
    const [exchanges, setExchanges] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchdatafroapi = async () => {
            try {
                const { data } = await axios.get(`${server}/exchanges`)

                setExchanges(data)
                setLoading(false)

                console.log(data)
            }
            catch (error) {
                setError(true)
                setLoading(true)

            }
        }
        fetchdatafroapi()
    }, [])


    if (error) return <ErrorComponent message={"Error While Fetching Coins"} />;
    return (<Container maxW={"container.xl"}>
        {
            loading ? <Loader /> :
                <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
                    {
                        exchanges.map((item, index) => {
                            return (
                                <motion.div
                                    animate={{
                                        translateY: "20px"
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }}
                                >


                                    <ExchangesCard
                                        name={item.name}
                                        rank={item.trust_score_rank}
                                        url={item.url}
                                        img={item.image}
                                        key={item.id}
                                    />
                                </motion.div>

                            )
                        })
                    }
                </HStack>
        }

    </Container>

    )
}



export default Exchange