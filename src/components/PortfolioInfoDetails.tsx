import { Box, Flex, Text } from "theme-ui"

type PortfolioInfoDetailsProps = {
    heading: string
    description: string
    graphicText: string
}

const PortfolioInfoDetails = ({heading, description, graphicText} : PortfolioInfoDetailsProps) => {
    return (
        <Box sx={{borderRadius: '12px', backgroundColor: 'surfaceGlass', height: ['fit-content', '500px'], width: ['100%','1000px']}}>
            <Flex sx={{justifyContent: ['center','space-between'], alignItems: ['center','space-between'], flexDirection: ['column', 'row']}}>
                <Box pt={['4','100px']} px='5' sx={{width: ['100%','60%']}}>
                    <Text sx={{variant: 'text.infoCardHeading'}}>{heading}</Text>
                </Box>
                <Box mr='4' mt='4' sx={{border: '8px solid #20421A', borderRadius: '12px', height: '175px', width: '300px'}}>
                    <Box ml={['0','-5']} mt='4' sx={{backgroundColor: 'black', borderRadius: '12px', height: '175px', width: '300px'}}>
                        <Box ml='25px' sx={{display: 'relative'}}>
                            <Text mt={['0','-4']} sx={{variant: 'text.infoCardGraphic', display: 'inline-block', textShadow: '0 0 20px #15B400'}}>{graphicText}</Text>
                        </Box>
                    </Box>
                </Box>
            </Flex>
            <Box mt={['0','5']} p={['5','84px']}>
                <Text sx={{variant: 'text.infoCardDescription'}}>{description}</Text>
            </Box>
        </Box>
    )
}

export default PortfolioInfoDetails