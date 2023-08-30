/** @jsxImportSource theme-ui */
import { Image, Flex, Text, Box } from "theme-ui";
import { FaRegCopyright } from 'react-icons/fa'
import vrLogoFooter from "../assets/VRLogo(footer).svg";
import VRLogo from "./VRLogo";

const Footer = () => {
    return (
        <footer>
            <Box sx={{background: 'black', position: 'fixed', width: '100%', bottom: '0', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <VRLogo textSize={0} />
                <Box pt={'3px'} sx={{fontSize: 1}}>
                    <FaRegCopyright />
                </Box>
                <Text pl={1} sx={{variant: 'text.footer'}} py={3}>2023 KPInc425. All Rights Reserved </Text>
            </Box>
        </footer>
    )
}

export default Footer