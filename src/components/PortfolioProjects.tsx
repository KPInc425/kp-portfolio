/** @jsxImportSource theme-ui */
import { Box, Flex, Text } from "theme-ui"
import PortfolioProject from "./PortfolioProject"
import SlantedBackground from "./SlandtedBackground"

const projects = [
  {
    title: 'Project Title',
    tagline: 'PROJECT TAGLINE SOME MORE CLEVER WORDS, YIPPIKIYAY!',
    description: 'Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum ut facilis voluptatem qui galisum incidunt aut exercitationem voluptatem. Non galisum possimus quo dignissimos omnis At natus minima non omnis quidem qui soluta voluptatibus. Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum ut facilis voluptatem qui galisum incidunt aut exercitationem voluptatem. Non galisum possimus quo dignissimos omnis At natus minima non omnis quidem qui soluta voluptatibus.',
    bullets: [
      'Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum ut facilis voluptatem.',
      'Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum.',
      'Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum.'
    ],
    imageUrl: 'https://via.placeholder.com/300'
  },
  {
    title: 'Project 2 Title',
    tagline: 'PROJECT TAGLINE SOME MORE CLEVER WORDS, THIS IS A DIFFERENT PROJECT!',
    description: 'Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum ut facilis voluptatem qui galisum incidunt aut exercitationem voluptatem. Non galisum possimus quo dignissimos omnis At natus minima non omnis quidem qui soluta voluptatibus. Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum ut facilis voluptatem qui galisum incidunt aut exercitationem voluptatem. Non galisum possimus quo dignissimos omnis At natus minima non omnis quidem qui soluta voluptatibus.',
    bullets: [
      'Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum ut facilis voluptatem.',
      'Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum.',
      'Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum.'
    ],
    imageUrl: 'https://via.placeholder.com/300'
  },
  {
    title: 'Project 3 Title',
    tagline: 'PROJECT TAGLINE SOME MORE CLEVER WORDS, THIS IS A DIFFERENT PROJECT!',
    description: 'Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum ut facilis voluptatem qui galisum incidunt aut exercitationem voluptatem. Non galisum possimus quo dignissimos omnis At natus minima non omnis quidem qui soluta voluptatibus. Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum ut facilis voluptatem qui galisum incidunt aut exercitationem voluptatem. Non galisum possimus quo dignissimos omnis At natus minima non omnis quidem qui soluta voluptatibus.',
    bullets: [
      'Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum ut facilis voluptatem.',
      'Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum.',
      'Lorem ipsum dolor sit amet. Est tempora eligendi et dolores exercitationem aut nemo dolorum.'
    ],
    imageUrl: 'https://via.placeholder.com/300'
  }
]

const PortfolioProjects = () => {
    return (
      <Flex mb='5' sx={{justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '6', position: 'relative'}}>
        {projects.map((project, index) => (
          <Flex key={index} sx={{position: 'relative', width: '99vw', height: '100vh', overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', scrollSnapAlign: 'start'}}>
            <SlantedBackground/>
            <PortfolioProject project={project}/>
          </Flex>
        ))}
      </Flex>
    )
}

export default PortfolioProjects