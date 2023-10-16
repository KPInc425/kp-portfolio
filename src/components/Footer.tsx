/** @jsxImportSource theme-ui */
import { Text, Box } from "theme-ui";
import { FaRegCopyright } from 'react-icons/fa'
import VRLogo from "./VRLogo";


const Footer = () => {
    return (
        <footer>
            <Box sx={{background: 'black', position: ['static','static','static','static','fixed'], width: '100%', bottom: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', borderTop: '3px solid white'}}>
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