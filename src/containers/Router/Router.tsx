import React from 'react';

export const HomePage = React.lazy(() => import('pages/Home'));
export const HistoryPage = React.lazy(() => import('pages/History'));
export const EventsPage = React.lazy(() => import('pages/Events'));
export const MarketplacePage = React.lazy(() => import('pages/Marketplace'));
export const TeamPage = React.lazy(() => import('pages/Team'));
export const TasksPage = React.lazy(() => import('pages/Tasks'));
