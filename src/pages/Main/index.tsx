import React from 'react';
import { Table, Space } from 'antd';

import Frame from 'containers/Frame';
// @ts-ignore
import { ReactComponent as Vtb } from 'assets/images/svg/VTB.svg';
// @ts-ignore
import { ReactComponent as SearchIcon } from 'assets/images/svg/search.svg';
// @ts-ignore
import { ReactComponent as UserIcon } from 'assets/images/svg/users2.svg';
// @ts-ignore
import avatar from 'assets/images/png/avatar.png';

// @ts-ignore
import chat1 from 'assets/images/png/chat1.png';
// @ts-ignore
import chat2 from 'assets/images/png/chat2.png';
// @ts-ignore
import chat3 from 'assets/images/png/chat3.png';
// @ts-ignore
import chat4 from 'assets/images/png/chat4.png';
// @ts-ignore
import perwie from 'assets/images/png/perwie.png';

// @ts-ignore
import Component from 'assets/images/png/Component.png';

import cx from './index.module.scss';

const MainPage = () => {
  return (
    <div className={cx.wrapper}>
      <div className={cx.firstPage}>
        <div className={cx.header}>
          <div className={cx.vtb}>
            <Vtb />
            <div className={cx.space}>
              <div>Участники</div>
              <div>О нас</div>
              <div>Участники</div>
            </div>
          </div>

          <div className={cx.leftH}>
            <SearchIcon />
            <img src={avatar} alt="123" width="60px" />
          </div>
        </div>
        <div className={cx.fpInfo}>
          <div className={cx.fpTitle}>
            <h1>РАБОТАТЬ СТАНЕТ ЕЩЕ ИНТЕРЕСНЕЕ</h1>
            <p>Какой-то текст по поводу того, что это супер сервис</p>
          </div>
          <div>
            <img src={chat1} alt="123" />
            <img src={chat2} alt="123" />
            <img src={chat3} alt="123" />
            <img src={chat4} alt="123" />
          </div>
        </div>
      </div>
      <div className={cx.liderBoard}>
        <div className={cx.liderBoardHeader}>
          <h3>Таблица лидеров</h3>
          <a>Посмотреть все</a>
        </div>
        <Table />
      </div>
      <div>
        <h2>Все о сервисе</h2>
        <Frame theme="dark">
          <div>Почему это интересно?</div>
          <h2>Это уникально</h2>
          <p>
            Созданное веб-приложение является уникальным предложением на рынке.
            Основная проблема сотрудников компании - это деление на группы, что
            ограничивает взаимодействия с другими сотрудниками. Наша разработка
            позволяет новичкам быстрее вливаться в коллектив, а действующим
            сотрудникам наиболее тесно взаимодействовать с другими сотрудниками
            и отделами
          </p>
        </Frame>
        <div>
          <Frame theme="dark">
            <img src={perwie} alt="123" />
          </Frame>
          <div>
            <div>
              <div>
                <UserIcon />
                <h4>Уровень</h4>
              </div>
              <p>
                В игре трёх уровневая система, где участники делятся на гильдии.
                Каждый уровень - это своего рода ступенька, которая позволяет
                открыть доступ к более дорогим заданиям. Задания выполняет как
                команда, так и игрок самостоятельно.
              </p>
            </div>
            <div>
              <div>
                <UserIcon />
                <h4>Уровень</h4>
              </div>
              <p>
                В игре трёх уровневая система, где участники делятся на гильдии.
                Каждый уровень - это своего рода ступенька, которая позволяет
                открыть доступ к более дорогим заданиям. Задания выполняет как
                команда, так и игрок самостоятельно.
              </p>
            </div>
            <div>
              <div>
                <UserIcon />
                <h4>Уровень</h4>
              </div>
              <p>
                В игре трёх уровневая система, где участники делятся на гильдии.
                Каждый уровень - это своего рода ступенька, которая позволяет
                открыть доступ к более дорогим заданиям. Задания выполняет как
                команда, так и игрок самостоятельно.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h2>Предстоящие мероприятия</h2>
          <a>Посмотреть все</a>
        </div>
        <div>
          <div>
            <img src={Component} alt="component" />
          </div>
          <div>
            <img src={Component} alt="component" />
          </div>
          <div>
            <img src={Component} alt="component" />
          </div>
          <div>
            <img src={Component} alt="component" />
          </div>
          <div>
            <img src={Component} alt="component" />
          </div>
          <div>
            <img src={Component} alt="component" />
          </div>
          <div>
            <img src={Component} alt="component" />
          </div>
          <div>
            <img src={Component} alt="component" />
          </div>
          <div>
            <img src={Component} alt="component" />
          </div>
        </div>
      </div>
      <div>
        <Vtb />
        <p>Все права защищены ©</p>
      </div>
    </div>
  );
};

export default MainPage;
