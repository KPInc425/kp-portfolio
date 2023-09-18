/** @jsxImportSource theme-ui */
import { Box, Flex, Image, Text } from "theme-ui"

type PortfolioProjectProps = {
  project: {
    title: string,
    tagline: string,
    description: string,
    bullets: string[],
    imageUrl: string
  }
}

const PortfolioProject = ({project}: PortfolioProjectProps) => {
  return (
    <>
      <Box mx='auto' sx={{borderRadius: '12px', backgroundColor: 'surfaceOpaque', height: '600px', width: '1100px', position: 'relative'}}>
        <Box sx={{borderRadius: '12px', backgroundColor: 'surfaceSecondary', height: '300px', width: '300px', position: 'absolute', left: '-20%', top: '12%'}}>
          <Flex sx={{justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%'}}>
          <Text sx={{ variant: 'text.heading', color: 'background'}}>{project.title}</Text>
          <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', textAlign: 'center', padding: '12px 20px'}}>{project.tagline}</Text>
          </Flex>
        </Box>
        
        <Flex sx={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
          <Flex px='6' sx={{flexDirection: 'column'}}>
            <Text sx={{ variant: 'text.heading', color: 'text'}}>Description</Text>
            <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '12px 20px'}}>{project.description}</Text>
          </Flex>
          <Flex pt='4' sx={{alignItems: 'center'}}>
            {/* <ul> */}
              <Flex pl='6' sx={{flexDirection: 'column', width: '60%', gap: '4'}}>
                {project.bullets.map((bullet) => (
                  <li>
                    <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '12px 20px'}}>{bullet}</Text>
                  </li>
                ))}
              </Flex>
            {/* </ul> */}
            <Image src={project.imageUrl} sx={{borderRadius: '12px', width: '300px', height: '200px'}}/>
          </Flex>
        </Flex>

        
      </Box>
    </>
  )
}

export default PortfolioProject