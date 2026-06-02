/** @jsxImportSource theme-ui */
import { Text, Box } from "theme-ui";
import { FaRegCopyright } from 'react-icons/fa'
import VRLogo from "./VRLogo";
import { useThemeTransition } from "../context/ThemeContext";

const NeoDarkFooter = () => (
  <footer
    style={{
      width: '100%',
      paddingBlock: '1.1rem',
      borderTop: '1px solid var(--color-base-300)',
      background: 'var(--color-base-200)',
    }}
  >
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 'min(1360px, calc(100% - 2rem))',
        margin: '0 auto',
        gap: '1rem',
        flexWrap: 'wrap',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.8rem', color: 'var(--color-primary)' }}>
          v1.2.0
        </span>
        <Box pt="3px" sx={{ fontSize: 1 }}>
          <FaRegCopyright />
        </Box>
        <Text pl={1} sx={{ variant: 'text.footer', color: 'secondaryText', fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', fontWeight: 300 }}>
          2024 Victor Reyes. Engineered with precision.
        </Text>
      </div>
      <div style={{ display: 'flex', gap: '1.5rem', fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', fontWeight: 400 }}>
        <a href="#" style={{ color: 'var(--color-base-content)', opacity: 0.7, textDecoration: 'none' }}>GitHub</a>
        <a href="#" style={{ color: 'var(--color-base-content)', opacity: 0.7, textDecoration: 'none' }}>LinkedIn</a>
        <a href="#" style={{ color: 'var(--color-base-content)', opacity: 0.7, textDecoration: 'none' }}>Twitter</a>
        <a href="#" style={{ color: 'var(--color-base-content)', opacity: 0.7, textDecoration: 'none' }}>Source</a>
      </div>
    </div>
  </footer>
);

const LegacyFooter = () => (
  <footer>
    <Box sx={{ background: 'black', position: ['static', 'static', 'static', 'static', 'fixed'], width: '100%', bottom: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', borderTop: '3px solid white' }}>
      <VRLogo textSize={0} />
      <Box pt="3px" sx={{ fontSize: 1 }}>
        <FaRegCopyright />
      </Box>
      <Text pl={1} sx={{ variant: 'text.footer' }} py={3}>2023 KPInc425. All Rights Reserved </Text>
    </Box>
  </footer>
);

const Footer = () => {
  const { theme } = useThemeTransition();
  return theme === 'neo-dark' ? <NeoDarkFooter /> : <LegacyFooter />;
};

export default Footer;
