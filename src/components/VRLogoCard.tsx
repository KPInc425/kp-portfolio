/** @jsxImportSource theme-ui */
import { Text, Box, Flex, Card } from "theme-ui";
import VRLogo from "./VRLogo";

const VRLogoCard = () => {
  return (
    <Card sx={{borderRadius: '15px', backgroundColor: 'surface', maxWidth: '250px'}}>
        <Flex sx={{alignItems: 'center', justifyContent: 'center'}}>
            <VRLogo textSize={7} />
            <Box sx={{minWidth: 'fit-content'}}>
                <Text sx={{ variant: "text.logoHeading" }}>Victor</Text>
                <Text ml={4} sx={{ variant: "text.logoHeading" }}>Reyes</Text>
            </Box>
        </Flex>
    </Card>
  );
};

export default VRLogoCard;