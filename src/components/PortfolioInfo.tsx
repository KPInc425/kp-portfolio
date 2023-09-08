/** @jsxImportSource theme-ui */

import { useState } from "react"
import { Box, Flex, Text } from "theme-ui"

const PortfolioInfo = () => {
    const menuItems = ['Home', 'Details', 'Portfolio', 'Resume', 'Contact']
    const [activeTab, setActiveTab] = useState('Home')
    return (
        <Box>
            <Flex ml='4' px='2' sx={{
                backgroundColor: 'primary', 
                borderRadius: '12px 12px 0 0', 
                height: '50px', 
                width: '800px', 
                gap: '4', 
                alignItems: 'center', 
                justifyContent: 'space-around'
            }}>
                { menuItems.map((item) => {
                    return ( 
                        <Flex
                            onClick={() => setActiveTab(item)}   
                            sx={{
                            backgroundColor: `${activeTab == item ? 'black' : 'transparent'}`,
                            borderRadius: '8px 8px 0 0', 
                            height: '58px', 
                            flexDirection: 'column', 
                            justifyContent: 'center', 
                            marginTop: '-8px', 
                            minWidth: '120px'
                        }}>
                            <Text sx={{textAlign: 'center', paddingTop: '15px'}}>{item}</Text> 
                        </Flex>
                    )})
                }
            </Flex>
            <Flex sx={{borderRadius: '12px', backgroundColor: 'surface', height: '500px', width: '1000px'}}>
                <Flex sx={{flexDirection: 'column', width: '60%'}}>
                    <Box pt='100px' pl='5'>
                        <Text sx={{variant: 'text.infoCardHeading'}}>Something about myself and why I want to be a web dev, like a clever tagline</Text>
                    </Box>
                    <Box mt='5' pl='84px'>
                        <Text sx={{variant: 'text.infoCardDescription'}}>
                            Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo
                            dolorum ut facilis voluptatem qui galisum incidunt aut exercitationem voluptatem.
                            Non galisum possimus quo dignissimos omnis At natus minima non omnis quidem qui soluta
                            voluptatibus.
                        </Text>
                    </Box>
                </Flex>
                <Flex sx={{flexDirection: 'column', width: '40%', alignItems: 'flex-end'}}>
                    <Box mr='4' mt='4' sx={{border: '8px solid #20421A', borderRadius: '12px', width: '300px', height: '175px'}}>
                        <Box ml='-5' mt='4' sx={{backgroundColor: 'black', borderRadius: '12px', height: '175px', width: '300px'}}>
                            <Box ml='25px' sx={{display: 'relative'}}>
                                <Text mt='-4' sx={{variant: 'text.infoCardGraphic', display: 'inline-block'}}>Powered by Passion and Enthusiasm</Text>
                            </Box>
                        </Box>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    )
}

export default PortfolioInfo