/** @jsxImportSource theme-ui */
import { Text, Box } from "theme-ui";
import { FaRegCopyright } from 'react-icons/fa'
import VRLogo from "./VRLogo";
import { useThemeTransition } from "../context/ThemeContext";

const NeoDarkFooter = () => {
  const year = 2026;
  return (
    <Box
      as="footer"
      sx={{
        width: "100%",
        py: 3,
        px: [3, 4],
        borderTop: "1px solid",
        borderColor: "var(--color-base-300)",
        background: "var(--color-base-100)",
        mt: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1280px",
          mx: "auto",
          flexDirection: ["column", "row"],
          gap: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <VRLogo textSize={5} />
          <Text sx={{ fontFamily: "'Inter', sans-serif", fontSize: 1, color: "var(--color-base-content)", opacity: 0.7 }}>
            <FaRegCopyright style={{ marginRight: "4px", verticalAlign: "middle" }} />
            {year} Victor Reyes. Engineered with precision.
          </Text>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 3,
            fontFamily: "'Inter', sans-serif",
            fontSize: 1,
            a: { color: "var(--color-base-content)", opacity: 0.6, textDecoration: "none", ":hover": { opacity: 1, color: "var(--color-primary)" } },
          }}
        >
          <a href="https://github.com/KPInc425" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/vreyes/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:VReyes.S.A@gmail.com">Email</a>
        </Box>
      </Box>
    </Box>
  );
};

const LegacyFooter = () => {
  const year = 2026;
  return (
    <Box as="footer">
      <Box sx={{ background: "black", position: ["static", "static", "static", "static", "fixed"], width: "100%", bottom: 0, display: "flex", justifyContent: "center", alignItems: "center", borderTop: "3px solid white" }}>
        <VRLogo textSize={0} />
        <Box pt="3px" sx={{ fontSize: 1 }}>
          <FaRegCopyright />
        </Box>
        <Text pl={1} sx={{ variant: "text.footer" }} py={3}>
          {year} KPInc425. All Rights Reserved
        </Text>
      </Box>
    </Box>
  );
};

const Footer = () => {
  const { theme } = useThemeTransition();
  return theme === "neo-dark" ? <NeoDarkFooter /> : <LegacyFooter />;
};

export default Footer;
