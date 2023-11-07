/** @jsxImportSource theme-ui */

import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa"
import { Box, Flex, Link, Text } from "theme-ui"

const PortfolioContact = () => {
  return (
    <>        
      <Flex pt={['6', '3', '5', '6']} pb='5' sx={{position: 'relative', width: '99vw', flexDirection: 'column', justifyContent: 'center'}}>
        <Box mx='auto' py='4' sx={{borderRadius: '12px', backgroundColor: 'surfaceOpaque', height: 'fit-content', position: 'relative'}}>
          <Box 
            // ml={['auto','auto','auto','-20%']}
            mx={'auto'} 
            mt={['-100px']}
            p={['3','0']}
            pl={['5','5','5','0']}
            pr={['0','0']}
            sx={{
              borderRadius: '12px', 
              borderStyle: ['inset', 'inset', 'inset', 'solid'], 
              borderColor: 'rgb(7 7 7)', 
              borderWidth: [4,4,4,0], 
              backgroundImage: "url('https://res.cloudinary.com/dxrjeyjpn/image/private/s--zgppMNZ6--/c_thumb,w_200,g_face/v1/KPWarz/KPHazeOrb_lr5wj5.png')", 
              backgroundColor: 'surfaceSecondary', 
              height: ['fit-content', 'fit-content', 'fit-content', '300px'],  
              width: ['80%', '80%', '80%','300px'], 
              // position: ['relative', 'relative', 'relative', 'sticky'],  
              // left: ['0','0','0','-20%'], 
              // top: [0, 0, 0,'12%'],
              backgroundSize: ['25%', '25%', '12%', '65%'], 
              backgroundRepeat: 'no-repeat', 
              backgroundPosition: ['5% 50%','5% 50%','5% 50%','50% 5%'], 
              }}
            >
            <Flex sx={{justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'column', height: '100%'}}>
              <Text pl={[0,0,4,0 ]} sx={{ variant: 'text.heading', color: 'background', alignSelf: ['center', 'center', 'start', 'center']}}>Victor Reyes</Text>
              <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', textAlign: 'center', padding: '12px 20px'}}>Aspiring Software Engineer Dedicated Web Developer.</Text>
            </Flex>
          </Box>
          
          <Flex sx={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', paddingTop: '4.5%'}}>
            <Flex px={[0, 0, 3, 6]} sx={{flexDirection: 'column', gap: [2,4]}}>
              <Text sx={{ variant: 'text.heading', color: 'text', padding: '12px 20px', textAlign: 'center'}}>Contact Me Today</Text>
              <Flex sx={{gap: '2', flexDirection: ['column', 'row']}}>
                <Link href='mailto:VReyes.S.A@gmail.com' sx={{variant: 'links.social', color: 'text', padding: '12px 20px', border: '2px solid white', borderRadius: '24px'}}>
                  <Flex sx={{gap: '2'}}>
                      <FaRegEnvelope />
                      Email
                  </Flex>
                </Link>
                <Link href='https://www.linkedin.com/in/vreyes/' target="_blank" sx={{variant: 'links.social', color: 'text', padding: '12px 20px', border: '2px solid white', borderRadius: '24px'}}>
                  <Flex sx={{gap: '2'}}>
                    <FaLinkedin />
                    LinkedIn
                  </Flex>
                  
                </Link>
                <Link href='https://github.com/KPInc425' target="_blank" sx={{variant: 'links.social', color: 'text', padding: '12px 20px', border: '2px solid white', borderRadius: '24px'}}>
                  <Flex sx={{gap: '2'}}>
                  <FaGithub />
                  Github
                  </Flex> 
                </Link>
              </Flex>
            </Flex>
          </Flex>        
        </Box>
      </Flex>
    </>
  )
}

export default PortfolioContact