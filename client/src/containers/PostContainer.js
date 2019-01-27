import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';

import PostList from '../components/PostList';

class PostListContainer extends PureComponent {
  render() {
    const { items } = this.props;
    const { posts, subreddit } = items;
    return (
      <Fragment>
         <PostList posts={posts} subreddit={subreddit} />
      </Fragment>
    )
  }
}

function mapStateToProps({ items }){
    return { items };
}
export default connect(mapStateToProps)(PostListContainer);