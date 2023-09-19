/** @jsxImportSource theme-ui */
import { Box, Flex, Text } from "theme-ui"
import PortfolioProject from "./PortfolioProject"
import SlantedBackground from "./SlandtedBackground"

const projects = [
  {
    title: 'TMRA.ai',
    tagline: 'Interactive Choose Your Own Adventure Game for the Web',
    description: "Be a part of generating your own 'player's choice adventure' stories with the power of ChatGPT, get immersed in the story with the help of StableDiffusion image generation, and share your stories with the world! With just a simple prompt stating your purpose and type of adventure, you can generate a story with the help of AI. Each scene of the story will come with an AI generated image and options for your next action to direct the story, you can even input a custom option for more control of the narrative.  The possibilities are endless!",
    bullets: [
      'ChatGPT for story generation and Stable Diffusion for image generation',
      'Integration with print service and pdf generation for physical copies of your generated stories',
      'Integration of gallery to webshop to print your favorite generated images on physical media',
      'Interactive story telling with user driven choices to direct the narrative',
    ],
    imageUrl: 'https://via.placeholder.com/300',
    projectUrl: 'https://tmra.ai'
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