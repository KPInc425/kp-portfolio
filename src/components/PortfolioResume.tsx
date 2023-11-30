/** @jsxImportSource theme-ui */

import { Box, Flex, Link, Text } from "theme-ui"

const PortfolioResume = () => {
  return (
    <>        
      <Flex pt='3' pb='5' sx={{position: 'relative', width: '99vw', flexDirection: 'column', justifyContent: 'center', scrollSnapAlign: 'start'}}>
        <Box mx='auto' py='4' sx={{borderRadius: '12px', backgroundColor: 'surfaceOpaque', height: 'fit-content', width: ['100%', '90%', '90%','1100px'], position: 'relative'}}>
          <Box 
            ml={['auto','auto','auto','-20%']}
            mx={'auto'} 
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
              position: ['relative', 'relative', 'relative', 'sticky'],  
              left: ['0','0','0','-20%'], 
              top: [0, 0, 0,'12%'],
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
          
          <Flex sx={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', paddingTop: '4.5%', marginTop: [0, 0, 0, '-300px']}}>
            <Flex px={[0, 0, 3, 6]} sx={{flexDirection: 'column', gap: [2,4]}}>
              <Text sx={{ variant: 'text.heading', color: 'text', padding: '12px 20px'}}>Hi, I am Victor</Text>
              <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '12px 20px'}}>Seeking a role in a cross-functional team with a clear product vision, where I can leverage my front-end development skills, automated testing expertise, and passion for code quality. Eager to contribute to projects ranging from conceptualization to implementation, while continuously learning and collaborating with fellow team members. While I have only been focused formally on improving my ability to perform the duties of a software developer for two years or so, I have been interested in development work for many years. With interests from basic computer science to game development I have exposed myself to many facets of development. After my experience with Full Stack Open, The Odin Project, and my most recent endeavors with Robot Builders Inc. I have picked up skills ranging from basic javascript to react and react based frameworks to Dotnet development with BlazorWasm, C#, and component and styling libraries.</Text>
              <Text sx={{ variant: 'text.heading', color: 'text', padding: '12px 20px'}}>Skills</Text>
                <Flex sx={{flexDirection: 'column'}}>
                    <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '12px 20px'}}><strong>Front-end development:</strong> HTML, CSS, and JavaScript. Experience with React.js, React based frameworks, BlazorWASM, Mudblazor, CSS style frameworks.</Text>
                    <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '12px 20px'}}><strong>Version Control:</strong> Git.</Text>
                    <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '12px 20px'}}><strong>Back-end Development:</strong>Node.js, C#</Text>
                    <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '12px 20px'}}><strong>Databases:</strong> MSSQL, MongoDB, Postgres.</Text>
                    <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '12px 20px'}}><strong>Project Management:</strong> Agile, Scrum.</Text>
                    <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '12px 20px'}}><strong>Critical Thinking:</strong> Strong analytical and problem-solving skills.</Text>
                    <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '12px 20px'}}><strong>Communication:</strong> Excellent communication and collaboration skills.</Text>

                </Flex>
              <Text sx={{ variant: 'text.heading', color: 'text', padding: '12px 20px'}}>Experience</Text>
                <Flex sx={{flexDirection: 'column', gap: '3'}}>
                  <Flex sx={{flexDirection: 'column'}}>
                    <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '0px 20px', fontSize: [3,4], fontWeight: 'bold'}}>
                      Software Engineer - Robot Builders Inc. - Remote February 2023 to April 2023
                    </Text>
                    <Text sx={{ variant: 'text.infoCardDescription', color: 'rgb(95 95 95)', padding: '0px 20px'}}>
                      Developed Interactive Story Game: <Link sx={{variant: 'links.nav'}} href="https://tmra.ai" target="_blank">tmra.ai</Link>
                    </Text>
                    <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '12px 20px'}}>
                      Leveraged technical expertise in front-end development to drive the development, conception to completion. Contributed to the design, development, and deployment pipeline. Worked closely with a cross-functional team, collaborated on projects spanning from conceptualization to implementation, ensuring high-quality deliverables and meeting project milestones
                      Gained experience with different technologies, including BlazorWasm, Dotnet, Mudblazor, MSSQL, C#, and automated testing.
                    </Text>
                  </Flex>
                  <Flex sx={{flexDirection: 'column'}}>
                    <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '0px 20px', fontSize: [3,4], fontWeight: 'bold'}}>
                      Full Stack Open - Full Stack Web Development Course - Online Learning, 2023
                    </Text>
                    <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '12px 20px'}}>
                      Immersed in development from the basics of web apps to using relational databases, I worked using the fundamentals of a React based workflow and incorporated many of the technologies needed for full stack development
                    </Text>
                  </Flex>
                  <Flex sx={{flexDirection: 'column'}}>
                    <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '0px 20px', fontSize: [3,4], fontWeight: 'bold'}}>
                      The Odin Project - Full Stack Web Development Curriculum - Online Learning, 2023
                    </Text>
                    <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '12px 20px'}}>
                      I worked the program from a basic understanding of computers, software version control using Git, creating basic websites and web apps utilizing html, css, and basic to more intermediary javascript fundamentals to diving into React and NodeJS for full stack experience
                    </Text>
                  </Flex>
                </Flex>
              <Text sx={{ variant: 'text.heading', color: 'text', padding: '12px 20px'}}>Education</Text>
              <Flex sx={{flexDirection: 'column', gap: '3'}}>
                <Flex sx={{flexDirection: 'column'}}>
                  <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '0px 20px', fontSize: '3', fontWeight: 'bold'}}>
                    The Odin Project - Full Stack Web Development Curriculum - Online Learning, 2023
                  </Text>
                  <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '12px 20px', fontStyle: 'italic', fontSize: '2'}}>
                    I worked the program from a basic understanding of computers, software version control using Git, creating basic websites and web apps utilizing html, css, and basic to more intermediary javascript fundamentals to diving into React and NodeJS for full stack experience
                  </Text>
                </Flex>
                <Flex sx={{flexDirection: 'column'}}>
                  <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '0px 20px', fontSize: '3', fontWeight: 'bold'}}>
                    The Odin Project - Full Stack Web Development Curriculum - Online Learning, 2023
                  </Text>
                  <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '12px 20px', fontStyle: 'italic', fontSize: '2'}}>
                    Instruction of building web development skills from web fundamentals and computer basics, to full stack development utilizing React and NodeJs. An emphasis on solid understanding of HTML, CSS, Javascript.
                  </Text>
                </Flex>
                <Flex sx={{flexDirection: 'column'}}>
                  <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '0px 20px', fontSize: '3', fontWeight: 'bold'}}>
                    Cert. - Industrial Technology w/ Electronics, Bakersfield College - Bakersfield, CA, 2017
                  </Text>
                  <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '12px 20px', fontStyle: 'italic', fontSize: '2'}}>
                    Developed proficiency in technical skills and safety principles essential for the industrial electronics sector. Exhibited adept problem-solving capabilities applicable to electrical design and product development. Attained a thorough comprehension of core materials requisite for electronics program certification.
                  </Text>
                </Flex>
                <Flex sx={{flexDirection: 'column'}}>
                  <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '0px 20px', fontSize: '3', fontWeight: 'bold'}}>
                    Cert. - Project Management, Edmonds Community College - Lynnwood, WA, 2013
                  </Text>
                  <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '12px 20px', fontStyle: 'italic', fontSize: '2'}}>
                    Learned to manage short-term projects, including planning, building and working with teams, creating schedules, allocating resources and budgets, monitoring and troubleshooting problems and changes
                  </Text>
                </Flex>
                <Flex sx={{flexDirection: 'column'}}>
                  <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '0px 20px', fontSize: '3', fontWeight: 'bold'}}>
                    A.S. - Energy Management, Edmonds Community College - Lynnwood, WA, 2012
                  </Text>
                  <Text sx={{ variant: 'text.infoCardDescription', color: 'grey', padding: '12px 20px', fontStyle: 'italic', fontSize: '2'}}>
                    Principles of energy and energy management, the technologies and techniques allowing for energy efficiency and conservation, energy end-use analysis, monitoring systems, energy-use accounting, project management, and report preparation and presentation skills.
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>        
        </Box>
      </Flex>
    </>
  )
}

export default PortfolioResume