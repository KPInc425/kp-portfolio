/** @jsxImportSource theme-ui */
import { Box, Flex, Image, Link, Text } from "theme-ui"

type PortfolioProjectProps = {
  project: {
    title: string,
    tagline: string,
    description: string,
    bullets: string[],
    imageUrl: string,
    projectUrl: string
  }
}

const PortfolioProject = ({project}: PortfolioProjectProps) => {
  return (
    <>
      <Box mx='auto' pb={3} sx={{borderRadius: '12px', backgroundColor: 'surfaceOpaque', height: ['fit-content','fit-content','fit-content','fit-content','600px'], width: ['100%', '90%', '90%', '90%','1100px'], position: 'relative'}}>
        <Box 
          mx={'auto'} 
          mt={[3, 3, 3, 3, 0]} 
          sx={{
            borderRadius: '12px', 
            borderStyle: ['inset', 'inset', 'inset', 'inset', 'solid'], 
            borderColor: 'rgb(7 7 7)', 
            borderWidth: [4,4,4,4,0], 
            backgroundColor: 'surfaceSecondary', 
            height: ['fit-content', 'fit-content', 'fit-content', 'fit-content', '300px'], 
            width: ['80%', '80%', '80%', '80%','300px'],
            position: ['relative', 'relative', 'relative', 'relative', 'absolute'],   
            left: [0, 0, 0, 0, '-20%'],
            top: [0, 0, 0, 0, '12%'],
          }}>
          <Flex pt={[3, 3, 3, 3, 0]} sx={{justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%'}}>
            <Text sx={{ variant: 'text.heading', color: 'background'}}>{project.title}</Text>
            <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', textAlign: 'center', padding: '12px 20px', textWrap: 'balance'}}>{project.tagline}</Text>
            <Link href={project.projectUrl} target="_blank" sx={{variant: 'links.primary', color: 'background', textDecoration: 'none', padding: '12px 20px'}}>Check it out!</Link>
          </Flex>
        </Box>
        
        <Flex sx={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: ['fit-content','fit-content','fit-content','fit-content','100%'], gap: 4}}>
          <Flex px={[0, 0, 5, 5, 6]} pt={[3, 3, 3, 3, 0]} sx={{flexDirection: 'column', gap: 3}}>
            <Text sx={{ variant: 'text.heading', color: 'text', padding: ['12px 20px','12px 20px',0,'12px 20px']}}>Description</Text>
            <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: ['12px 20px','12px 20px',0, 0,'12px 20px']}}>{project.description}</Text>
          </Flex>
          <Flex px={[0, 0, 5, 5, 6]} sx={{alignItems: 'center', gap: '4', flexDirection: ['column', 'column', 'column', 'column',  'row'], width: ['100%'],  padding: '12px 20px'}}>
            <Flex sx={{flexDirection: 'column', width: ['100%','100%','100%','100%','60%'], gap: '3'}}>
              {project.bullets.map((bullet, index) => (
                <Text key={index} sx={{ variant: 'text.infoCardDescription', color: 'grey'}}>{bullet}</Text>
              ))}
            </Flex>
            <Image mb={[4, 0]} src={project.imageUrl} sx={{borderRadius: '12px', width: '350px', height: '200px'}}/>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default PortfolioProject