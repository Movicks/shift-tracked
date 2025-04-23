export interface SidebarProps {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
  isMobile: boolean;
  isTablet: boolean;
  onWidthChange?: (newWidth: number) => void; // 👈 Add this
  navWidth?: number;
}