/** @jsxImportSource theme-ui */
import { Box, Flex } from "theme-ui";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";

type MainLayoutProps = {
    children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Flex sx={{flexDirection: 'column', justifyContent: 'space-between', minHeight: '100vh'}}>
      <Box>
        <MainHeader />
        <Box my={['0','4']}>{children}</Box>
      </Box>
      <Footer />
    </Flex>
  );
};

export default MainLayout;
