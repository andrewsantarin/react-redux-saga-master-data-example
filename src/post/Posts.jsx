import React from 'react';
import { connect } from 'react-redux';

import { getPosts } from './actions';

export function Posts({ isFetching, posts, getPosts }) {
  return (
    <div>
      <button onClick={getPosts}>Retrieve Posts</button>
      {isFetching && <p>One moment...</p>}
      {!isFetching && posts.length > 0 && <ul>
        {posts.map(({ id, title }) => <li key={id}>{title}</li>)}
      </ul>}
    </div>
  );
}

const mapStateToProps = (state, props) => {
  const { app, post } = state;
  const { posts: posts_data = {} } = app; // Source of data
  const { result = {}, isFetching } = post;
  const { posts: post_ids = [] } = result; // Source of view-specific result

  const posts = post_ids.map(post_id => posts_data[post_id]);

  return {
    posts,
    isFetching,
  };
}
const mapDispatchToProps = { getPosts };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
