import React, { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Result, Button, Skeleton } from 'antd';

import Frame from 'containers/Frame';

import {
  HistoryPage,
  HomePage,
  TasksPage,
  TeamPage,
  MarketplacePage,
} from './containers/Router/Router';
import { EArea } from './types/router';
import WorkPlaceLayout from './containers/Layouts/WorkPlace';

import './App.css';
import 'styles/global.scss';
import Main from './pages/Main';

const App = () => {
  return (
    <>
      <WorkPlaceLayout>
        <Suspense fallback={<Skeleton active />}>
          <Routes>
            <Route path={EArea.Home} element={<HomePage />} />
            <Route path={EArea.History} element={<HistoryPage />} />
            <Route path={EArea.Marketplace} element={<MarketplacePage />} />
            <Route path={EArea.Tasks} element={<TasksPage />} />
            <Route path={EArea.Team} element={<TeamPage />} />
            <Route
              path="*"
              element={
                <div className="notFoundPage">
                  <Frame theme="white">
                    <Result
                      status="404"
                      title="404"
                      subTitle="Извинете, страница не найдена..."
                      extra={
                        <Button type="primary">
                          <Link to="/">На главную</Link>
                        </Button>
                      }
                    />
                  </Frame>
                </div>
              }
            />
          </Routes>
        </Suspense>
      </WorkPlaceLayout>
    </>
  );
};

export default App;
