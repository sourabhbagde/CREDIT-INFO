import React from 'react';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
//  a data array of SideBar contents are created.
export const SideBarData = [
  {
    // each content tab has assigned a title with an icon.
    title: 'Home',
    icon: <HomeIcon />,
    // where to navigate.
    link: '/home',
  },
  {
    title: 'My Cards',
    icon: <CreditCardIcon />,
    link: '/my-cards',
  },
  {
    title: 'Spending Tracker',
    icon: <BarChartIcon />,
    link: '/spending-tracker',
  },
  {
    title: 'Settings',
    icon: <SettingsIcon />,
    link: '/settings',
  },
  // added some dummy placeholders for future addons - if needed.
  {
    title: 'Placeholder1',
    icon: <AddIcon />,
    link: '/placeholder1',
  },
  {
    title: 'Placeholder2',
    icon: <AddIcon />,
    link: '/placeholder2',
  },
  {
    title: 'Placeholder3',
    icon: <AddIcon />,
    link: '/placeholder3',
  },
];
