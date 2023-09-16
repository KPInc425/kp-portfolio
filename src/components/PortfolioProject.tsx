/** @jsxImportSource theme-ui */
import { Box, Flex, Image, Text } from "theme-ui"

const PortfolioProject = () => {
  return (
    <>
      <Box mx='auto' sx={{borderRadius: '12px', backgroundColor: 'surfaceOpaque', height: '600px', width: '1100px', position: 'relative'}}>
        <Box sx={{borderRadius: '12px', backgroundColor: 'surfaceSecondary', height: '300px', width: '300px', position: 'absolute', left: '-20%', top: '12%'}}>
          <Flex sx={{justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%'}}>
          <Text sx={{ variant: 'text.heading', color: 'background'}}>PROJECT TITLE</Text>
          <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', textAlign: 'center', padding: '12px 20px'}}>PROJECT TAGLINE SOME MORE CLEVER WORDS, YIPPIKIYAY!</Text>
          </Flex>
        </Box>
        
        <Flex sx={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
          <Flex px='6' sx={{flexDirection: 'column'}}>
            <Text sx={{ variant: 'text.heading', color: 'text'}}>Description</Text>
            <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '12px 20px'}}>Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum ut facilis voluptatem qui galisum incidunt aut exercitationem voluptatem. Non galisum possimus quo dignissimos omnis At natus minima non omnis quidem qui soluta voluptatibus. Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum ut facilis voluptatem qui galisum incidunt aut exercitationem voluptatem. Non galisum possimus quo dignissimos omnis At natus minima non omnis quidem qui soluta voluptatibus.</Text>
          </Flex>
          <Flex pt='4' sx={{alignItems: 'center'}}>
            {/* <ul> */}
              <Flex pl='6' sx={{flexDirection: 'column', width: '60%', gap: '4'}}>
                  <li>
                    <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '12px 20px'}}>Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum ut facilis voluptatem.</Text>
                  </li>
                  <li>
                    <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '12px 20px'}}>Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum.</Text>
                  </li>
                  <li>
                    <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '12px 20px'}}>Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum.</Text>
                  </li>
              </Flex>
            {/* </ul> */}
            <Image src='https://via.placeholder.com/300' sx={{borderRadius: '12px', width: '300px', height: '200px'}}/>
          </Flex>
        </Flex>

        
      </Box>
    </>
  )
}

export default PortfolioProject