import { Box, Flex, Text } from "theme-ui"

type PortfolioInfoDetailsProps = {
    heading: string
    description: string
    graphicText: string
}

const PortfolioInfoDetails = ({heading, description, graphicText} : PortfolioInfoDetailsProps) => {
    return (
        <Box sx={{borderRadius: '12px', backgroundColor: 'surfaceGlass', height: '500px', width: '1000px'}}>
            <Flex sx={{justifyContent: 'space-between'}}>
                <Box pt='100px' pl='5' sx={{width: '60%'}}>
                    <Text sx={{variant: 'text.infoCardHeading'}}>{heading}</Text>
                </Box>
                <Box mr='4' mt='4' sx={{border: '8px solid #20421A', borderRadius: '12px', width: '300px', height: '175px'}}>
                    <Box ml='-5' mt='4' sx={{backgroundColor: 'black', borderRadius: '12px', height: '175px', width: '300px'}}>
                        <Box ml='25px' sx={{display: 'relative'}}>
                            <Text mt='-4' sx={{variant: 'text.infoCardGraphic', display: 'inline-block'}}>{graphicText}</Text>
                        </Box>
                    </Box>
                </Box>
            </Flex>
            <Box mt='5' px='84px'>
                <Text sx={{variant: 'text.infoCardDescription'}}>{description}</Text>
            </Box>
        </Box>
    )
}

export default PortfolioInfoDetails