import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setUserRef } from './actions';

export class User extends Component {
  componentDidMount() {
    this.props.setUserRef(this.refs.user);
  }

  render() {
    const { total_users } = this.props;

    return (
      <div ref="user">
        {total_users > 0
          ? total_users
          : 'No users'
        }
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const { app, user } = state;
  const { users: users_data = {} } = app; // Source of data
  const { result = {}, isFetching = false } = user;
  const { users: user_ids = [] } = result; // Source of view-specific result

  const total_users = user_ids.length;

  return {
    total_users,
    isFetching,
  };
}
const mapDispatchToProps = { setUserRef };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
