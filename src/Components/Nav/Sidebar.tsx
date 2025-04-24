import { useEffect } from 'react';
import { Drawer, List, ListItemButton, ListItemText, Box, ListItemIcon } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { SidebarProps } from '../../types/types';
import LogOutIcon from '../../assets/icons/logout.svg';

// Import icons from react-icons
import {  
  FiSettings
} from 'react-icons/fi';
import { FolderOpen, Grid3, TagUser, User } from 'iconsax-reactjs';
import { LuCalendarDays } from 'react-icons/lu';

const Sidebar: React.FC<SidebarProps> = ({ mobileOpen, handleDrawerToggle, isMobile, isTablet }) => {
  const drawerWidth = 272;
  const location = useLocation();

  // Enhanced IconWrapper with special styling for FiGrid
  const IconWrapper = ({ icon: Icon, active }: { 
    icon: React.ElementType; 
    active: boolean;
  }) => {
    const baseStyle = { 
      color: active ? '#007BFF' : 'currentColor',
      fontSize: '20px',
      transition: 'all 0.2s ease-in-out'
    };

    // Special styles only for FiGrid
    const isFiGrid = Icon === Grid3;
    const extraStyles = isFiGrid ? {
      strokeWidth: active ? '2.5px' : '2px',
      transform: active ? 'scale(1.05)' : 'scale(1)'
    } : {};

    return <Icon style={{ ...baseStyle, ...extraStyles }} />;
  };

  // Function to calculate milliseconds until 12 AM
  const getMillisecondsUntilMidnight = () => {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    return midnight.getTime() - now.getTime();
  };

  // Setting up a timer to refresh the page at 12 AM
  useEffect(() => {
    const millisecondsUntilMidnight = getMillisecondsUntilMidnight();
    const timer = setTimeout(() => {
      window.location.reload();
    }, millisecondsUntilMidnight);

    // Clean up the timer
    return () => clearTimeout(timer);
  }, []);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: 'transparent' }} className='drawer-container px-4 pt-[4rem] md:pt-[5.5rem] lg:py-3 flex flex-col gap-2 bg-[rgba(10, 10, 73, 0.2)] overflow-auto scrollbar-hide'>
      <List sx={{ backgroundColor: 'transparent', color: 'black' }}>
        <div className='flex items-center gap-3'>
          <div className='w-[44px] h-[44px] bg-cover bg-center bg-blue-500 rounded-full'>
            <img src='Svgs/Shazam.svg' alt='Logo' />
          </div>
          <div className='flex flex-col text-start'>
            <header className='text-start text-xs text-gray-500'>ADMIN PORTAL</header>
            <h1 className='tex-xs font-semibold'>Shiftacare</h1>
          </div>
        </div>
      </List>
      <div className='w-full h-[1px] bg-gray-300 my-3 Divider'></div>
      <List sx={{ backgroundColor: 'transparent' }}>
        <header className='text-start text-xs text-gray-500 pl-4 mb-2'>MAIN</header>
        {[
          { text: 'Dashboard', path: '/', icon: Grid3 },
          { text: 'Rota', path: '/rota', icon: FolderOpen },
          { text: 'Check-ins', path: '/checkins', icon: LuCalendarDays },
          { text: 'Staff', path: '/staff', icon: TagUser },
          { text: 'Service User', path: '/service-user', icon: User },
        ].map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <ListItemButton
              key={item.text}
              component={Link}
              to={item.path}
              sx={{
                background: isActive ? '#F5F7FA' : 'transparent',
                color: isActive ? '#007BFF' : '',
                borderRadius: isActive ? '8px' : '8px',
                pt: 0.5,
                pb: 0.5,
                my: 0.5,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <ListItemIcon sx={{ 
                color: isActive ? '#007BFF' : '',
                minWidth: '40px'
              }}>
                <IconWrapper icon={item.icon} active={isActive} />
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                className='flex items-center mt-7 mb-7' 
                primaryTypographyProps={{
                  fontWeight: isActive ? 'normal' : 'normal'
                }}
              />
            </ListItemButton>
          );
        })}
      </List>

      <div className='w-full h-[1px] bg-gray-300 my-2 Divider'></div>
      
      <List sx={{ backgroundColor: 'transparent', height: '100vh' }} className='flex flex-col items-start justify-between h-full'>
        <List sx={{ backgroundColor: 'transparent' }} className='w-full'>
          <header className='text-start text-xs text-gray-500 pl-4 mb-2 uppercase'>OTHER</header>
          {[
            { text: 'Settings', path: '/settings', icon: FiSettings },
          ].map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <ListItemButton
                key={item.text}
                component={Link}
                to={item.path}
                sx={{
                  background: isActive ? '#F5F7FA' : 'transparent',
                  color: isActive ? '#007BFF' : '',
                  borderRadius: isActive ? '8px' : '8px',
                  pt: 0.5,
                  pb: 0.5,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <ListItemIcon sx={{ 
                  color: isActive ? '#007BFF' : '',
                  minWidth: '40px'
                }}>
                  <IconWrapper icon={item.icon} active={isActive} />
                </ListItemIcon>
                <ListItemText 
                  primary={item.text} 
                  className='flex items-center mt-7 mb-7' 
                  primaryTypographyProps={{
                    fontWeight: isActive ? 'normal' : 'normal'
                  }}
                />
              </ListItemButton>
            );
          })}
        </List>
        <button className='flex items-center gap-5 pl-4 text-red-500'>
          <img src={LogOutIcon} alt='#'/>
          <span>Logout Account</span>
        </button>
      </List>
    </Box>
  );

  return (
    <Box component="nav" className='nav'>
      <Drawer
        variant={(isMobile || isTablet) ? "temporary" : "permanent"}
        open={isMobile || isTablet ? mobileOpen : true}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', sm: 'block', md: 'block', lg: 'block' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: drawerWidth, 
            backgroundColor: 'white', 
            borderRight: '1px solid #d1d5db' 
          },
        }}
      >
        {drawer}
      </Drawer>
      {!isMobile && !isTablet && (
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth, 
              backgroundColor: '#fff', 
              borderRight: '1px solid #d1d5db' 
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;