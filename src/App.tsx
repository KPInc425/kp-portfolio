/** @jsxImportSource theme-ui */
import { useState } from 'react'
import './App.css'
import MainLayout from './layouts/MainLayout'
import VRLogoCard from './components/VRLogoCard'
import { Flex } from 'theme-ui'
import PortfolioInfo from './components/PortfolioInfo'
import PortfolioProjects from './components/PortfolioProjects'
import PortfolioResume from './components/PortfolioResume'
import PortfolioContact from './components/PortfolioContact'


function App() {
  const [activeTab, setActiveTab] = useState(
    localStorage.getItem('activeView') || 'Home'
  )
  return (
    <>
      <MainLayout>
        <Flex m={['0','5']} sx={{justifyContent: 'center', alignItems: 'center', gap: '5', flexDirection: ['column', 'column', 'column', 'column', 'row']}}>
          <VRLogoCard />
          <PortfolioInfo activeTab={activeTab} setActiveTab={setActiveTab} />
        </Flex>
        { activeTab === 'Portfolio' && (
          <PortfolioProjects />
        )}
        { activeTab === 'Resume' && (
          <PortfolioResume />
        )}
        { activeTab === 'Contact' && (
          <PortfolioContact /> 
        )}
      </MainLayout>
    </>
  )
}

export default App
