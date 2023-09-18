/** @jsxImportSource theme-ui */
import { Box } from "theme-ui";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";

type MainLayoutProps = {
    children: React.ReactNode;
    activeTab: string;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children, activeTab }) => {
  return (
    <>
      <MainHeader />
      <Box my={['0','4']}>{children}</Box>
      <Footer activeTab={activeTab} />
    </>
  );
};

export default MainLayout;
