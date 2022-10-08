import React from 'react';

import Frame from 'containers/Frame';

import cx from './index.module.scss';

export interface ITaskCard {
  title: string;
  status: string;
  date: string;
  executer: string;
  avatar: any;
  taskImg: any;
  name: string;
  taskText: string;
}

const TaskCard = ({
  title,
  status,
  taskImg,
  taskText,
  name,
  executer,
  date,
  avatar,
}: ITaskCard) => {
  return (
    <Frame theme="white">
      <div className={cx.wrapper}>
        <div className={cx.header}>
          <h3>{title}</h3>
          <div className={cx.status}>{status}</div>
        </div>
        <p>{date}</p>
        <div className={cx.img}>
          <img src={taskImg} alt="123" />
        </div>
        <p className={cx.text}>{taskText}</p>
        <p>{executer}</p>
        <div className={cx.profile}>
          <img src={avatar} alt="123" width="30px" />
          <p>{name}</p>
        </div>
      </div>
    </Frame>
  );
};

export default TaskCard;
