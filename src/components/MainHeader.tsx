/** @jsxImportSource theme-ui */
import { Image, Flex, Text, Box } from "theme-ui";
import vrLogo from "../assets/VRLogo.svg";
import topBardGraphic from "../assets/topBarGraphic.svg";
import VRLogo from "./VRLogo";

const MainHeader = () => {
    return (
        <header>
            <Flex sx={{alignItems: 'center'}}>
                <Box sx={{minWidth: 'fit-content', width: ['40px']}}>
                    <VRLogo textSize={6} />
                </Box>
                <Box sx={{minWidth: 'fit-content'}}>
                    <Text sx={{ variant: "text.logoHeading" }}>Victor</Text>
                    <Text ml={4} sx={{ variant: "text.logoHeading" }}>Reyes</Text>
                </Box>
                <Image sx={{maxWidth: '100%', flexGrow: '1'}} src={topBardGraphic} />

            </Flex>
        </header>
    )
}

export default MainHeader;