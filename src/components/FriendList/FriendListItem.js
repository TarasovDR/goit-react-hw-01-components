import PropTypes from 'prop-types';

import defaultImage from '../../images/default-avatar.png';
import s from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.friendItem}>
      <span className={isOnline ? s.isOnline : s.isOffline}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.defaultProps = {
  avatar: defaultImage,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
