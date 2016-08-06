import React, { PropTypes } from 'react';

const UserInfo = (props) => {
  const { username, firstName, lastName } = props.user;
  const { yourProfile } = props;
  return (
    <div className="UserInfoContainer">
      <div className="UserInfo">
        <div className="profileUserName"> { username } </div>
        <div className="profileName">{ lastName }, { firstName }</div>
        <span>{ yourProfile ? <p>you</p> : <p>not you</p> }</span>
      </div>
    </div>
  );
};

UserInfo.propTypes = {
  user: PropTypes.object.isRequired,
  yourProfile: PropTypes.bool.isRequired,
};

export default UserInfo;
