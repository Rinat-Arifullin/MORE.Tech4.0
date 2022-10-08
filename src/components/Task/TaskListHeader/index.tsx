import React from 'react';
import { Button, Space } from 'antd';

import CreateTaskModal from 'components/CreateTaskModal';
// @ts-ignore
import { ReactComponent as SearchIcon } from 'assets/images/svg/search.svg';
// @ts-ignore
import { ReactComponent as FilterIcon } from 'assets/images/svg/filter.svg';
// @ts-ignore
import { ReactComponent as CalendarIcon } from 'assets/images/svg/calendar.svg';

import cx from './index.module.scss';

const TaskListHeader = () => {
  return (
    <div className={cx.wrapper}>
      <div className={cx.left}>
        <h3>Задания</h3>
        <Space>
          <Button type="primary">Все</Button>
          <Button>Текущие</Button>
          <Button>Архив</Button>
        </Space>
      </div>

      <div className={cx.rigth}>
        <Space size="large">
          <SearchIcon />
          <FilterIcon />
          <CalendarIcon />
        </Space>
        <CreateTaskModal />
      </div>
    </div>
  );
};

export default TaskListHeader;
