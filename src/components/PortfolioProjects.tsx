/** @jsxImportSource theme-ui */
import { Box, Flex, Text } from "theme-ui"
import PortfolioProject from "./PortfolioProject"
import SlantedBackground from "./SlandtedBackground"

const PortfolioProjects = () => {
    return (
      <Flex mb='5' sx={{justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '6', position: 'relative'}}>
        {/* <SlantedBackground /> */}
        <Flex sx={{position: 'relative', width: '99vw', height: '100vh', overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', scrollSnapAlign: 'start'}}>
          <SlantedBackground/>
          <PortfolioProject />
        </Flex>
        <Flex sx={{position: 'relative', width: '99vw', height: '100vh', overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', scrollSnapAlign: 'start'}}>
          <SlantedBackground/>
          <PortfolioProject />
        </Flex>
        <Flex sx={{position: 'relative', width: '99vw', height: '100vh', overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', scrollSnapAlign: 'start'}}>
          <SlantedBackground/>
          <PortfolioProject />
        </Flex>
        <Flex sx={{position: 'relative', width: '99vw', height: '100vh', overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', scrollSnapAlign: 'start'}}>
          <SlantedBackground/>
          <PortfolioProject />
        </Flex>
      </Flex>
    )
}

export default PortfolioProjects