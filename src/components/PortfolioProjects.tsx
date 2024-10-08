/** @jsxImportSource theme-ui */
import { Flex } from "theme-ui"
import PortfolioProject from "./PortfolioProject"
import SlantedBackground from "./SlandtedBackground"

const projectsVictor = [
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
    projectUrl: 'https://app.tmra.ai'
  },
  {
    title: 'TMRA Landing Page',
    tagline: 'Landing page for TMRA.ai',
    description: "Get informed about one of the first AI generated choose your own adventure game. A page filled with examples of what the game can generate and info about what kind of features the game holds. A single page app with a simple design to showcase the game and get people excited about it. It was build using React, styled with Theme Ui and some Radix Components, bundled with Vite, and used an NodeJs backend with a small express server for sending email's through a sendGrid API to the team.",
    bullets: [
      'Simple landing page to showcase the game and get people excited about it',
      "It was built because the previous site was limited by the hosting service's site building tools and we wanted more control over the design and functionality",
      'Built with React, Theme UI, Radix Components, NodeJs, Express, and Vite for bundling',
    ],
    imageUrl: 'https://res.cloudinary.com/dxrjeyjpn/image/private/s--B9qT-Iw1--/v1699392666/PortfolioSite/TMRALanding_gtw5oc.jpg',
    projectUrl: 'https://tmra.ai'
  },
  {
    title: 'Word Search Kingdom',
    tagline: 'Nostalgic Word Search Game with a modern twist',
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
    title: 'Willows Wonderland',
    tagline: 'Bringing imagination to life, stroke by stroke',
    description: 'Willows Wonderland is a portfolio website for a local artist. It is built to reflect the artists spirited style. It is a full stack application built with RedwoodJs, styled with Mantine, and deployed with Netlify. Simple authorization and authentication was added, along with an admin tools page so the artist can manage their desired images for their gallery. The images are integrated with Cloudinary for easy uploading and deleting of images by the artist. Deployed with Netlify and connected to a Supabase PostgreSql database for persistance of data. It provided lots of learnings of connecting many moving peices together and styled to the artists liking.',
    bullets: [
      'Full stack application built with RedwoodJs, styled with Mantine, and deployed with Netlify',
      'Simple auth and admin tools page for the artist to manage their gallery',
      'Integrated with Cloudinary for easy uploading and deleting of images by the artist',
    ],
    imageUrl: 'https://res.cloudinary.com/dxrjeyjpn/image/private/s--94AVblML--/v1699393171/PortfolioSite/WillowsWonderland_xtws8r.jpg',
    projectUrl: 'https://willows-wonderland.netlify.app/'
  },
  {
    title: 'KnG Auto Detail',
    tagline: 'Crafting Brilliance, One Car at a Time',
    description: 'KnG Auto Detail is a local auto detailing business that needed a website to showcase their work and provide a way for customers to contact them. It was built with the NextJs framework and Theme UI for styling. It is a simple site that is easy to navigate and provides all the information a customer would need to contact them. It was build responsively so it looks great on all devices. It was a fun project to work on and I am very happy with the results.',
    bullets: [
      'Simple small business website to showcase services and provide contact information',
      'Built with NextJs and Theme UI for styling',
      'Built with mobile in mind, so it looks great on all devices'
    ],
    imageUrl: 'https://res.cloudinary.com/dxrjeyjpn/image/private/s--IflweC9Y--/v1697566205/KnGAuto/LandingExample_rattsm.jpg',
    projectUrl: 'https://kngautodetail.netlify.app/kng/about'
  },
]

// const projectsKP = [
  //   {
    //     title: 'KPWarz',
    //     tagline: 'Old idea made new, get your hustle up!',
    //     description: 'A classic made modern, redone once again with some new twists. I have wanted to remake this type of game for a very long time, ever since I played it on a calculator in highschool, 20 years later, I am finally close to realizing it. It was built with RedwoodJS which incorporates React, Typescript, Storybook for frontend and, GraphQL, Prisma, for the backend, Postgres for the database, and Jest for testing. Redwood is a greate framework to handle the full stack. KPWarz is a work in progress, but I am very excited to see it come to life. I chose to work with Mantine for the styling framework so there was some coherence in the design. I am very happy with the results so far, and I am excited to continue working on it and adding new features to modernaize it.',
    //     bullets: [
      //       'New twist on an old classic, with a modern design and new features',
      //       'Classic from rags to riches story, with extra choices to change your starting point and difficulty',
      //       'Built in dev blog, to keep players up to date on changes and future endeavors.'
      //     ],
      //     imageUrl: 'https://source.unsplash.com/sOKJDYHGCjc',
      //     projectUrl: 'https://kpwarz.netlify.app/'
      //   },
    // {
      //   title: 'TMRA.ai',
      //   tagline: 'Interactive Choose Your Own Adventure Game for the Web',
      //   description: "Be a part of generating your own 'player's choice adventure' stories with the power of ChatGPT, get immersed in the story with the help of StableDiffusion image generation, and share your stories with the world! With just a simple prompt stating your purpose and type of adventure, you can generate a story with the help of AI. Each scene of the story will come with an AI generated image and options for your next action to direct the story, you can even input a custom option for more control of the narrative.  The possibilities are endless!",
      //   bullets: [
        //     'ChatGPT for story generation and Stable Diffusion for image generation',
        //     'Integration with print service and pdf generation for physical copies of your generated stories',
        //     'Integration of gallery to webshop to print your favorite generated images on physical media',
        //     'Interactive story telling with user driven choices to direct the narrative',
        //   ],
        //   imageUrl: 'https://res.cloudinary.com/dxrjeyjpn/image/private/s--zwekjVui--/v1695340529/PortfolioSite/TMRAExample_y1y6ow.jpg',
        //   projectUrl: 'https://app.tmra.ai'
        // },
    // {
      //   title: 'Word Search Kingdom',
      //   tagline: 'Nostalic Word Search Game with a modern twist',
      //   description: 'Word Search Kingdom is a word search game with a twist. It is a nostalgic game that has been around for a long time, but it has been modernized with a new look and new features. It was built within the Dotnet ecosystem utilizing blazorWasm, Razor templates and Mudblazor for the frontend, C# to connect all the parts, and a SQL database. There is a suite of integrated automated testing from top to bottom of the stack. We have been very happy with the results so far, and We have big plans to make it more interactive and multiplayer with the potential of a story mode to really bring it to life.',
      //   bullets: [
        //     'Generate your own word search puzzles with custom words and sizes',
        //     'Keep track of your progress with a user account and leaderboards are coming soon to compete with friends and family',
        //     'Multiplayer feature is in the planning stage, but with time attack and collaborative modes planned, it will be a great way to play with friends and family'
        //   ],
        //   imageUrl: 'https://res.cloudinary.com/dxrjeyjpn/image/private/s--R1NUUd1X--/v1695341498/PortfolioSite/WSKExample_tmoj0r.jpg', 
        //   projectUrl: 'https://wordsearchkingdom.com'
    // },
  // ]
          
          const PortfolioProjects = () => {
            return (
              <Flex m={[3,5]} sx={{justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: [3,3,4,4,6], position: 'relative'}}>
        {projectsVictor.map((project, index) => (
          <Flex pb={[0,0,4]} key={index} sx={{position: 'relative', width: '99vw', height: ['100%','100%','100%','100%','100vh'], overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', scrollSnapAlign: 'start'}}>
            <SlantedBackground/>
            <PortfolioProject project={project}/>
          </Flex>
        ))}
      </Flex>
    )
}

export default PortfolioProjects