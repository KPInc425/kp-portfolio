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
    imageUrl: 'https://res.cloudinary.com/dxrjeyjpn/image/private/s--zwekjVui--/v1695340529/PortfolioSite/TMRAExample_y1y6ow.jpg',
    projectUrl: 'https://tmra.ai'
  },
  {
    title: 'Word Search Kingdom',
    tagline: 'Nostalic Word Search Game with a modern twist',
    description: 'Word Search Kingdom is a word search game with a twist. It is a nostalgic game that has been around for a long time, but it has been modernized with a new look and new features. It was built within the Dotnet ecosystem utilizing blazorWasm, Razor templates and Mudblazor for the frontend, C# to connect all the parts, and a SQL database. There is a suite of integrated automated testing from top to bottom of the stack. We have been very happy with the results so far, and We have big plans to make it more interactive and multiplayer with the potential of a story mode to really bring it to life.',
    bullets: [
      'Generate your own word search puzzles with custom words and sizes',
      'Keep track of your progress with a user account and leaderboards are coming soon to compete with friends and family',
      'Multiplayer feature is in the planning stage, but with time attack and collaborative modes planned, it will be a great way to play with friends and family'
    ],
    imageUrl: 'https://res.cloudinary.com/dxrjeyjpn/image/private/s--R1NUUd1X--/v1695341498/PortfolioSite/WSKExample_tmoj0r.jpg', 
    projectUrl: 'https://wordsearchkingdom.com'
  },
  {
    title: 'KPWarz',
    tagline: 'Old idea made new, get your hustle up!',
    description: 'A classic made modern, redone once again with some new twists. I have wanted to remake this type of game for a very long time, ever since I played it on a calculator in highschool, 20 years later, I am finally close to realizing it. It was built with RedwoodJS which incorporates React, Typescript, Storybook for frontend and, GraphQL, Prisma, for the backend, Postgres for the database, and Jest for testing. Redwood is a greate framework to handle the full stack. KPWarz is a work in progress, but I am very excited to see it come to life. I chose to work with Mantine for the styling framework so there was some coherence in the design. I am very happy with the results so far, and I am excited to continue working on it and adding new features to modernaize it.',
    bullets: [
      'New twist on an old classic, with a modern design and new features',
      'Classic from rags to riches story, with extra choices to change your starting point and difficulty',
      'Built in dev blog, to keep players up to date on changes and future endeavors.'
    ],
    imageUrl: 'https://source.unsplash.com/sOKJDYHGCjc',
    projectUrl: 'https://kpwarz.netlify.app/'
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