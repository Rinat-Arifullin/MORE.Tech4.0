import React from 'react';

import ProfileCard from 'components/ProfileCard';
import CreateTaskModal from 'components/CreateTaskModal';

// @ts-ignore
import { ReactComponent as EditIcon } from 'assets/images/svg/edit.svg';
// @ts-ignore
import { ReactComponent as HelpIcon } from 'assets/images/svg/help-circle.svg';
// @ts-ignore
import avatar from 'assets/images/png/avatar.png';

import cx from './index.module.scss';

const Profile = () => {
  return (
    <div className={cx.left}>
      <ProfileCard
        guildAvatar={avatar}
        guildTitle="Back-end"
        name="Иван П.А."
        userAvatar={avatar}
        professions={['Back-end', 'Top-manager']}
        raiting={30}
        lvl={2}
        id={1}
      />
      <CreateTaskModal />
    </div>
  );
};

export default Profile;
