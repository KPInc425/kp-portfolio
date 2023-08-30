import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";

type MainLayoutProps = {
    children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <MainHeader />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
