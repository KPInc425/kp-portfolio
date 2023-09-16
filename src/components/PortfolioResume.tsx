/** @jsxImportSource theme-ui */

import { Box, Flex, Image, Text } from "theme-ui"

const PortfolioResume = () => {
  return (
    <>        
      <Flex py='4' sx={{position: 'relative', width: '99vw', flexDirection: 'column', justifyContent: 'center', scrollSnapAlign: 'start'}}>
        <Box mx='auto' py='4' sx={{borderRadius: '12px', backgroundColor: 'surfaceOpaque', height: 'fit-content', width: '1100px', position: 'relative'}}>
          <Box sx={{borderRadius: '12px', backgroundImage: "url('https://via.placeholder.com/300')", backgroundColor: 'surfaceSecondary', height: '300px', width: '300px', position: 'absolute', left: '-20%', top: '12%'}}>
            <Flex sx={{justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'column', height: '100%'}}>
              <Text sx={{ variant: 'text.heading', color: 'background'}}>Victor Reyes</Text>
              <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', textAlign: 'center', padding: '12px 20px'}}>Aspiring Software Engineer Dedicated Web Developer.</Text>
            </Flex>
          </Box>
          
          <Flex sx={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', paddingTop: '4.5%'}}>
            <Flex px='6' sx={{flexDirection: 'column', gap: '4'}}>
              <Text sx={{ variant: 'text.heading', color: 'text'}}>Hi, I am Victor</Text>
              <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '12px 20px'}}>Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum ut facilis voluptatem qui galisum incidunt aut exercitationem voluptatem. Non galisum possimus quo dignissimos omnis At natus minima non omnis quidem qui soluta voluptatibus. Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum ut facilis voluptatem qui galisum incidunt aut exercitationem voluptatem. Non galisum possimus quo dignissimos omnis At natus minima non omnis quidem qui soluta voluptatibus.</Text>
              <Text sx={{ variant: 'text.heading', color: 'text'}}>Skills</Text>
              <ul>
                <Flex sx={{flexDirection: 'column', gap: '3'}}>
                  <li>
                    <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '12px 20px'}}>- Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum ut facilis voluptatem.</Text>
                  </li>
                  <li>
                    <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '12px 20px'}}>- Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum ut facilis voluptatem.</Text>
                  </li>
                  <li>
                    <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '12px 20px'}}>- Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum ut facilis voluptatem.</Text>
                  </li>
                  <li>
                    <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '12px 20px'}}>- Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum ut facilis voluptatem.</Text>
                  </li>
                  <li>
                    <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '12px 20px'}}>- Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum ut facilis voluptatem.</Text>
                  </li>
                </Flex>
              </ul>
              <Text sx={{ variant: 'text.heading', color: 'text'}}>Experience</Text>
              <ul>
                <Flex sx={{flexDirection: 'column', gap: '3'}}>
                  <li>
                    <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '12px 20px'}}>- Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum ut facilis voluptatem.</Text>
                  </li>
                  <li>
                    <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '12px 20px'}}>- Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum ut facilis voluptatem.</Text>
                  </li>
                  <li>
                    <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '12px 20px'}}>- Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum ut facilis voluptatem.</Text>
                  </li>
                  <li>
                    <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '12px 20px'}}>- Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum ut facilis voluptatem.</Text>
                  </li>
                  <li>
                    <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '12px 20px'}}>- Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum ut facilis voluptatem.</Text>
                  </li>
                </Flex>
              </ul>
              <Text sx={{ variant: 'text.heading', color: 'text'}}>Education</Text>
              <ul>
                <Flex sx={{flexDirection: 'column', gap: '3'}}>
                  <li>
                    <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '12px 20px'}}>- Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum ut facilis voluptatem.</Text>
                  </li>
                  <li>
                    <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '12px 20px'}}>- Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum ut facilis voluptatem.</Text>
                  </li>
                  <li>
                    <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '12px 20px'}}>- Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum ut facilis voluptatem.</Text>
                  </li>
                  <li>
                    <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '12px 20px'}}>- Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum ut facilis voluptatem.</Text>
                  </li>
                  <li>
                    <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '12px 20px'}}>- Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum ut facilis voluptatem.</Text>
                  </li>
                </Flex>
              </ul>
            </Flex>
          </Flex>        
        </Box>
      </Flex>
    </>
  )
}

export default PortfolioResume