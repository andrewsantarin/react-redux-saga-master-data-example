import React from "react";
import { connect } from "react-redux";

import { getUsers } from "./actions";

export function Users({ isFetching, users, getUsers }) {
  return (
    <div>
      <button onClick={getUsers}>Retrieve Users</button>
      {isFetching && <p>One moment...</p>}
      {!isFetching && users.length > 0 && (
        <ul>
          {users.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

const mapStateToProps = (state, props) => {
  const { app, user } = state;
  const { users: users_data = {} } = app; // Source of data
  const { result = {}, isFetching } = user;
  const { users: user_ids = [] } = result; // Source of view-specific result

  const users = user_ids.map(user_id => users_data[user_id]);

  return {
    users,
    isFetching
  };
};
const mapDispatchToProps = {
  getUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
