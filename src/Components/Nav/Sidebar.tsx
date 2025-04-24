import { useEffect } from 'react';
import { Drawer, List, ListItemButton, ListItemText, Box, ListItemIcon } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { SidebarProps } from '../../types/types';

// Import SVG icons as strings (file paths)
import DashboardIconSrc from '../../assets/icons/grid-3.svg';
import RotaIconSrc from '../../assets/icons/folder-open.svg';
import CheckInsIconSrc from '../../assets/icons/calendar.svg';
import StaffIconSrc from '../../assets/icons/tag-user.svg';
import ServiceUserIconSrc from '../../assets/icons/user.svg';
import LogOutIcon from '../../assets/icons/logout.svg';
import { AiOutlineSetting } from 'react-icons/ai';

const Sidebar: React.FC<SidebarProps> = ({ mobileOpen, handleDrawerToggle, isMobile, isTablet }) => {
  const drawerWidth = 272;
  const location = useLocation();

  // Function to create SVG components from image sources
  const createSvgComponent = (src: string) => {
    return ({ style, ...props }: React.SVGProps<SVGSVGElement>) => (
      <svg 
        {...props} 
        viewBox="0 0 24 24" 
        width="1em" 
        height="1em"
        style={{ ...style, fontSize: '20px' }}
      >
        <image href={src} width="100%" height="100%" />
      </svg>
    );
  };

  // Create icon components
  const DashboardIcon = createSvgComponent(DashboardIconSrc);
  const RotaIcon = createSvgComponent(RotaIconSrc);
  const CheckInsIcon = createSvgComponent(CheckInsIconSrc);
  const StaffIcon = createSvgComponent(StaffIconSrc);
  const ServiceUserIcon = createSvgComponent(ServiceUserIconSrc);

  // SVG icon component with styling
  const SvgIcon = ({ icon: Icon, active }: { icon: React.FC<React.SVGProps<SVGSVGElement>>; active: boolean }) => (
    <Icon 
      style={{ 
        color: active ? '#007BFF' : 'currentColor'
      }} 
    />
  );

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
          { text: 'Dashboard', path: '/', icon: DashboardIcon },
          { text: 'Rota', path: '/rota', icon: RotaIcon },
          { text: 'Check-ins', path: '/checkins', icon: CheckInsIcon },
          { text: 'Staff', path: '/staff', icon: StaffIcon },
          { text: 'Service User', path: '/service-user', icon: ServiceUserIcon },
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
                <SvgIcon icon={item.icon} active={isActive} />
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                className='flex items-center mt-7 mb-7' 
                primaryTypographyProps={{
                  fontWeight: isActive ? 'normal' : 'normal' //just in case the team wants to add active font weight
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
            { text: 'Settings', path: '/settings', icon: <AiOutlineSetting className='w-6 h-6' /> },
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
                  {item.icon}
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