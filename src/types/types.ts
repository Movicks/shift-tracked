export interface SidebarProps {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
  isMobile: boolean;
  isTablet: boolean;
  onWidthChange?: (newWidth: number) => void;
  navWidth?: number;
}

export interface ShiftPerson {
  id: string;
  minutesLeft: number;
  image: string;
  fullName: string;
  shiftHostedByName: string;
  verifiedStatus: boolean;
  shiftCompleted: boolean;
}

export interface TodoItem {
  id: string;
  title: string;
  description: string;
  date: string;
  completed: boolean;
}

