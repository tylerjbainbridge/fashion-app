import React, { PropTypes } from 'react';

const UserInfo = () => {
  const { username, firstName, lastName } = this.props.user;
  return (
    <div className="UserInfoContainer">
      <div className="UserInfo">
        <div className="profileUserName"> { username } </div>
        <div className="profileName">{ lastName }, { firstName }</div>
        <span>{this.props.yourProfile ? <p>you</p> : <p>not you</p>}</span>
      </div>
    </div>
  );
};

UserInfo.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserInfo;
