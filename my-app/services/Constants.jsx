import {
  LayoutDashboardIcon,
  Calendar,
  List,
  Settings,
  WalletCards,
} from "lucide-react";

export const SideBarOptions = [
  {
    name: 'Dashboard',
    icon: LayoutDashboardIcon,
    path: '/dashboard',
  },
  {
    name: 'Scheduled Interview',
    icon: Calendar,
    path: '/scheduled-interview',
  },
  {
    name: 'All Interview',
    icon: List,
    path: '/all-interview',
  },
  {
    name: 'Billing',
    icon: WalletCards,
    path: '/billing',
  },
  {
    name: 'Settings',
    icon: Settings,
    path: '/settings',
  },
];
