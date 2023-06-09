import React, { useEffect, useState } from 'react'
import { server } from '../index'
import axios from "axios"
import { Box, Button, Container, HStack, Heading, Image, Radio, RadioGroup, Text, VStack } from '@chakra-ui/react'
import ExchangesCard from './ExchangesCard'
import Loader from './Loader'
import BitCoinCard from './BitCoinCard'
import ErrorComponent from './ErrorComponent'
import { motion } from "framer-motion"

function BitCoin() {
    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(true)
    const [currency, setCurrency] = useState("inr")
    const [page, setPage] = useState(2)
    const [error, setError] = useState(false)


    const currencySymbol =
        currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";


    const changepage = (page) => {
        setPage(page)
        setLoading(true)
    }

    const btns = new Array(132).fill(1)
    useEffect(() => {
        const fetchdatafroapi = async () => {
            try {
                const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)

                setCoins(data)
                setLoading(false)

                console.log(data)
            } catch {
                // alert("not working")
                setError(true)
                setLoading(true)
            }
        }
        fetchdatafroapi()
    }, [currency, page])
    if (error) return <ErrorComponent message={"Error While Fetching Coins"} />;
    return (<Container maxW={"container.xl"}>
        {
            loading ? <Loader /> :
                <>
                    {/* "inr"? "₹":currency==="eur"?"€" : "$"; */}
                    <RadioGroup p={"1"} w={"full"} value={currency} onChange={setCurrency}>
                        <HStack>
                            <Radio value={"inr"}  >₹ INR</Radio>
                            <Radio value={"eur"} >€EUR</Radio>
                            <Radio value={"usd"} >$USD</Radio>
                        </HStack>
                    </RadioGroup>
                    <motion.div
                        animate={{
                            translateY: "2px"

                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    >
                        <HStack wrap={"wrap"} justifyContent={"space-evenly"} w={"full"} >

                            {
                                // {name,id,price,symbol,img, currencySymbol="₹"} 
                                coins.map((item, index) => {
                                    return (

                                        <BitCoinCard
                                            id={item.id}
                                            name={item.name}
                                            symbol={item.symbol}
                                            price={item.current_price}
                                            img={item.image}
                                            key={item.id}
                                            currencySymbol={currencySymbol}
                                        />



                                    )
                                })
                            }
                        </HStack>
                    </motion.div>

                    <HStack w={"full"} overflowX={"auto"} p={"8"} m={"auto"}>
                        {
                            btns.map((item, index) => {
                                return (

                                    <Button

                                        bgColor={'blackAlpha.900'} color={"white"} onClick={() => changepage(index + 1)}>{index + 1}</Button>

                                )
                            })
                        }
                    </HStack>


                </>
        }

    </Container>

    )
}



export default BitCoin