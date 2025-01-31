import { Box } from '@mui/material';
import SettingsDrawer from '@components/settings/drawer/SettingsDrawer';

const Header = ({ themeMode }) => (
    <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: '32px',
        height: '64px',
        marginTop: '6px'
    }}>
        <img src={themeMode === 'dark' ? '/altan-pay-light.png' : '/altan-pay.png'} alt="Altan Pay" style={{ width: '175px' }} />
        <SettingsDrawer noTypography />
    </Box>
);

export default Header;
