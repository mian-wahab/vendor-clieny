import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  // { key: 'overview', title: 'Overview', href: paths.dashboard.overview, icon: 'chart-pie' },
  { key: 'vendors', title: 'Members', href: paths.dashboard.vendors, icon: 'users' },
  // { key: 'integrations', title: 'Integrations', href: paths.dashboard.integrations, icon: 'plugs-connected' },
  // { key: 'settings', title: 'Settings', href: paths.dashboard.settings, icon: 'gear-six' },
  { key: 'ftp', title: 'FTP', href: paths.dashboard.ftp, icon: 'user' },
  { key: 'logout', title: 'Logout', href: paths.dashboard.logout, icon: 'plugs-connected' },
  // { key: 'error', title: 'Error', href: paths.errors.notFound, icon: 'x-square' },
  // {key : 'vendor', title: 'Vendor', href: paths.dashboard.vendor, icon: 'user'}
] satisfies NavItemConfig[];
 