import React from 'react';

import { EArea } from 'types/router';

// @ts-ignore
import { ReactComponent as HomeIcon } from 'assets/images/svg/home.svg';
// @ts-ignore
import { ReactComponent as LayersIcon } from 'assets/images/svg/layers.svg';
// @ts-ignore
import { ReactComponent as GridIcon } from 'assets/images/svg/grid.svg';
// @ts-ignore
import { ReactComponent as BookIcon } from 'assets/images/svg/book.svg';
// @ts-ignore
import { ReactComponent as UsersIcon } from 'assets/images/svg/users.svg';
// @ts-ignore
import { ReactComponent as FeatherIcon } from 'assets/images/svg/feather.svg';

export interface ISideBarItem {
  linkPath: string;
  title: string;
  icon: React.ReactNode;
}

export const sideBarItems: ISideBarItem[] = [
  {
    linkPath: EArea.Home,
    title: 'Главная',
    icon: <HomeIcon />,
  },
  {
    linkPath: EArea.History,
    title: 'История',
    icon: <BookIcon />,
  },
  {
    linkPath: EArea.Marketplace,
    title: 'Маркетплейс',
    icon: <GridIcon />,
  },
  {
    linkPath: EArea.Team,
    title: 'Команда',
    icon: <UsersIcon />,
  },
  {
    linkPath: EArea.Tasks,
    title: 'Задания',
    icon: <FeatherIcon />,
  },
];
