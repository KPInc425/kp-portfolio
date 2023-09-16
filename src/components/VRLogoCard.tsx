/** @jsxImportSource theme-ui */
import { Text, Box, Flex, Card } from "theme-ui";
import VRLogo from "./VRLogo";

const VRLogoCard = () => {
  return (
    <Card py='3' px='4' sx={{borderRadius: '15px', backgroundColor: 'surface', minWidth: 'fit-content', display: ['none', 'block']}}>
        <Flex sx={{alignItems: 'center', justifyContent: 'center'}}>
            <VRLogo textSize={9} />
            <Box sx={{minWidth: 'fit-content'}}>
                <Text sx={{ variant: "text.logoCard" }}>Victor</Text>
                <Text ml={4} sx={{ variant: "text.logoCard" }}>Reyes</Text>
            </Box>
        </Flex>
    </Card>
  );
};

export default VRLogoCard;