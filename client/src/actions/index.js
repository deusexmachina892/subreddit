import axios from 'axios';
import { FETCH_POSTS } from './types';

export const fetchSubreddits = (subreddit) => async dispatch => {
    const res = await axios.get(`https://www.reddit.com/r/${subreddit}.json`);
    dispatch({ type: FETCH_POSTS, payload: {posts: res.data.data.children, subreddit}});
  }