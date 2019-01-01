import React from 'react';
import { connect } from 'react-redux';

import User from '../user/User';
import Users from '../user/Users';
import Posts from '../post/Posts';

export default function App() {
  return (
    <div>
      <User />
      <Users />
      <Posts />
    </div>
  );
}
