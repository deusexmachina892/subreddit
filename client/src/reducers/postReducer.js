import { FETCH_POSTS } from '../actions/types';

const INITIAL_STATE = {
    posts: [],
    subreddit: ''
}

export default function( state = INITIAL_STATE, action){
    switch(action.type){
        case FETCH_POSTS:
          return {...state, ...action.payload}
        default:
          return state;
    }
}