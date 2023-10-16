import { Box, Flex, Text } from "theme-ui"

type PortfolioInfoDetailsProps = {
    heading: string
    description: string
    graphicText: string
}

const PortfolioInfoDetails = ({heading, description, graphicText} : PortfolioInfoDetailsProps) => {
    return (
        <Box sx={{borderRadius: '12px', backgroundColor: 'surfaceGlass', height: ['fit-content'], width: ['100%', '100%','fit-content'], maxWidth: '1000px'}}>
            <Flex sx={{justifyContent: ['center','space-between'], alignItems: ['center','space-between'], flexDirection: ['column', 'row']}}>
                <Box pt={['4','100px']} px={['4','5']} sx={{width: ['100%','60%'], textWrap: 'balance'}}>
                    <Text sx={{variant: 'text.infoCardHeading'}}>{heading}</Text>
                </Box>
                <Box mr='4' mt='4' sx={{border: '8px solid #20421A', borderRadius: '12px', height: '175px', width: ['100%','300px']}}>
                    <Box ml={['0','-5']} mt='4' sx={{backgroundColor: 'black', borderRadius: '12px', height: '175px', width: ['100%','300px']}}>
                        <Box ml='25px' sx={{display: 'relative', textAlign: ['center', 'start'], textWrap: 'balance'}}>
                            <Text mt={['0','-4']} p={['2', '0']} sx={{variant: 'text.infoCardGraphic', display: 'inline-block', textShadow: '0 0 20px #15B400', position: ['absolute', 'relative'], transform: ['translateX(-50%)', 'none'] }}>{graphicText}</Text>
                        </Box>
                    </Box>
                </Box>
            </Flex>
            <Box mt={['3','5']} p={['4','84px']}>
                <Text sx={{variant: 'text.infoCardDescription'}}>{description}</Text>
            </Box>
        </Box>
    )
}

export default PortfolioInfoDetails