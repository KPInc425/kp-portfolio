/** @jsxImportSource theme-ui */
import { useEffect, useMemo } from 'react'
import './App.css'
import MainLayout from './layouts/MainLayout'
import VRLogoCard from './components/VRLogoCard'
import { Flex } from 'theme-ui'
import PortfolioInfo from './components/PortfolioInfo'
import PortfolioProjects from './components/PortfolioProjects'
import PortfolioResume from './components/PortfolioResume'
import PortfolioContact from './components/PortfolioContact'
import { Hero } from './components/sections/Hero'
import { BentoIntro } from './components/sections/BentoIntro'
import { FeaturedProjects } from './components/sections/FeaturedProjects'
import { useLocation, useNavigate } from 'react-router-dom'
import { useThemeTransition } from './context/ThemeContext'
import { useTransitionEngine } from './hooks/useTransitionEngine'
import { useEasterEgg } from './hooks/useEasterEgg'
import { useProjects } from './hooks/useProjects'
import AdminPanel from './components/AdminPanel'
import TransitionOverlay from './components/TransitionOverlay'
import TypewriterGhost from './components/TypewriterGhost'
import { useEffectsEngine } from './hooks/useEffectsEngine'

const routeToTab: Record<string, string> = {
  '/': 'Home',
  '/about': 'Details',
  '/portfolio': 'Portfolio',
  '/resume': 'Resume',
  '/contact': 'Contact',
}

const tabToRoute: Record<string, string> = {
  Home: '/',
  Details: '/about',
  Portfolio: '/portfolio',
  Resume: '/resume',
  Contact: '/contact',
}

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const {
    theme,
    adminUnlocked,
    isAdminOpen,
    setAdminOpen,
    unlockAdmin,
    pushDebugLog,
    triggerTransition,
    transitionConfig,
    isTransitioning,
  } = useThemeTransition()
  const projectsApi = useProjects()

  const activeTab = useMemo(() => routeToTab[location.pathname] ?? 'Home', [location.pathname])

  const setActiveTab = (nextTab: string) => {
    localStorage.setItem('activeView', nextTab)
    navigate(tabToRoute[nextTab] ?? '/')
  }

  useEffect(() => {
    localStorage.setItem('activeView', activeTab)
  }, [activeTab])

  useTransitionEngine()
  useEffectsEngine()

  useEasterEgg({
    onSecretWord: () => {
      unlockAdmin('Secret word: kpinc425')
      setAdminOpen(true)
      pushDebugLog('Admin panel unlocked by secret word.')
    },
    onKonami: () => {
      pushDebugLog('Konami code detected.')
      triggerTransition('konami-code')
    },
    onIddqd: () => {
      unlockAdmin('IDDQD')
      pushDebugLog('IDDQD detected. God mode aura armed.')
    },
    onIdkfa: () => {
      unlockAdmin('IDKFA')
      pushDebugLog('IDKFA detected. Chaos overlay armed.')
    },
  })

  const isNeoDark = theme === 'neo-dark'

  return (
    <div className="app-shell">
      <MainLayout>
        {/* Neo-dark shows Hero on Home, legacy shows VRLogoCard + PortfolioInfo always */}
        {isNeoDark && activeTab === 'Home' ? (
          <Hero />
        ) : (
          <Flex m={['0','5']} sx={{justifyContent: 'center', alignItems: 'center', gap: '5', flexDirection: ['column', 'column', 'column', 'column', 'row']}}>
            <VRLogoCard />
            <PortfolioInfo activeTab={activeTab} setActiveTab={setActiveTab} />
          </Flex>
        )}

        { isNeoDark && activeTab === 'Home' && <BentoIntro /> }
        { isNeoDark && activeTab === 'Home' && <FeaturedProjects /> }
        { activeTab === 'Portfolio' && (
          <PortfolioProjects projects={projectsApi.projects} />
        )}
        { activeTab === 'Resume' && (
          <PortfolioResume />
        )}
        { activeTab === 'Contact' && (
          <PortfolioContact />
        )}
      </MainLayout>
      <TypewriterGhost />
      <TransitionOverlay active={isTransitioning} type={transitionConfig.transitionType} />
      <AdminPanel
        adminUnlocked={adminUnlocked}
        isOpen={isAdminOpen}
        onToggleOpen={() => setAdminOpen(!isAdminOpen)}
        projectsApi={projectsApi}
      />
    </div>
  )
}

export default App
