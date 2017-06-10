import { STOP_SUBSCRIPTION } from 'meteor/samy:redux-middlewares';

import {
  HOME_POSTS_SUBSCRIPTION_READY,
  HOME_POSTS_SUBSCRIPTION_CHANGED,
  HOME_POSTS_SUB,
} from '/imports/actions/home/posts/load';

const initialState = {
  ready: false,
  posts: [],
  postsSubscriptionStopped: false,
};

export function home(state = initialState, action) {
  switch (action.type) {
    case HOME_POSTS_SUBSCRIPTION_READY:
      return {
        ...state,
        ready: action.payload.ready,
        postsSubscriptionStopped: false,
      };
    case HOME_POSTS_SUBSCRIPTION_CHANGED:
      return {
        ...state,
        posts: action.payload,
      };
    case STOP_SUBSCRIPTION:
      return action.payload === HOME_POSTS_SUB
        ? { ...state, postsSubscriptionStopped: true }
        : state;
    default:
      return state;
  }
}
