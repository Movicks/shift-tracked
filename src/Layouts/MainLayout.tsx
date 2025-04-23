import { Outlet } from "react-router-dom";
import { useState } from "react";
import { CssBaseline, AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import Sidebar from "../Components/Nav/Sidebar";
import TopRightNavs from "../Components/Nav/TopRightNavs";
import TopLefNavs from "../Components/Nav/TopLefNavs";

function MainLayout() {
    const [navWidth, setNavWidth] = useState(272); // Default sidebar width
    const [mobileOpen, setMobileOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width:600px)');
    const isTablet = useMediaQuery('(max-width:960px)');

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleNavWidthChange = (newWidth: number) => {
        setNavWidth(newWidth);
    };

    return (
        <Box sx={{ display: 'flex', height: '100vh' }}>
            <CssBaseline />
            
            {/* AppBar */}
            <AppBar 
                position="fixed" 
                sx={{ 
                    zIndex: (theme) => theme.zIndex.drawer + 1, 
                    backgroundColor: 'white !important',
                    color: 'black',
                    backdropFilter: 'blur(30px)', // Adding blur effect to the background
                    boxShadow: 'none',
                    width: `calc(100% - ${!(isMobile || isTablet) ? navWidth : 0}px)`,
                    ml: `${!(isMobile || isTablet) ? navWidth : 0}px`,
                    transition: (theme) => theme.transitions.create(['width', 'margin'], {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.enteringScreen,
                    }),
                }}
                className="shadow-lg lg:shadow-none"
            >
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {(isMobile || isTablet) && (
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 1 }}
                            >
                                {mobileOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                            </IconButton>
                        )}
                        <Typography variant="h6" noWrap component="div">
                            <TopLefNavs />
                        </Typography>
                    </Box>
                    <TopRightNavs />
                </Toolbar>
            </AppBar>

            {/* Sidebar */}
            <Sidebar 
                mobileOpen={mobileOpen} 
                handleDrawerToggle={handleDrawerToggle} 
                isMobile={isMobile} 
                isTablet={isTablet}
                onWidthChange={handleNavWidthChange}
                navWidth={navWidth}
            />

            {/* Main Content Area */}
            <Box 
                component="main" 
                sx={{ 
                    flexGrow: 1, 
                    width: `calc(100vw - ${!(isMobile || isTablet) ? navWidth : 0}px)`,
                    ml: `${!(isMobile || isTablet) ? navWidth : 0}px`,
                    transition: (theme) => theme.transitions.create(['width', 'margin'], {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.enteringScreen,
                    }),
                    height: '100vh',
                    overflow: 'auto'
                }}
                className="pt-[64px] md:pt-[85px] px-3 md:pl-6 md:pr-9 w-full no-scrollbar" // AppBar height
            >
                <Outlet />
            </Box>
        </Box>
    );
}

export default MainLayout;