/** @jsxImportSource theme-ui */
import { Box, Flex } from "theme-ui";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import TopAppBar from "../components/TopAppBar";
import { useThemeTransition } from "../context/ThemeContext";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { theme } = useThemeTransition();
  const isNeoDark = theme === 'neo-dark';

  return (
    <Flex sx={{ flexDirection: 'column', justifyContent: 'space-between', minHeight: '100vh' }}>
      {isNeoDark ? <TopAppBar /> : <MainHeader />}
      <Box my={['0','4']}>{children}</Box>
      <Footer />
    </Flex>
  );
};

export default MainLayout;
