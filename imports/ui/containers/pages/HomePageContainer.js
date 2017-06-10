import { connect } from 'react-redux';
import { stopSubscription } from 'meteor/samy:redux-middlewares';

import { loadUser } from '/imports/actions/user/load';
import { loadHomePosts, HOME_POSTS_SUB } from '/imports/actions/home/posts/load';
import { logout } from '/imports/actions/user/logout';
import { register } from '/imports/actions/user/register';

import { HomePageComponent } from '/imports/ui/components/pages/HomePageComponent';

const mapStateToProps = state => ({
  user: state.user,
  postsReady: state.home.ready,
  posts: state.home.posts,
  postsSubscriptionStopped: state.home.postsSubscriptionStopped,
});

const mapDispatchToProps = dispatch => ({
  loadUser: () => dispatch(loadUser()),
  loadPosts: () => dispatch(loadHomePosts()),
  logout: () => dispatch(logout()),
  register: () => dispatch(register()),
  stopPostsSubscription: () => dispatch(stopSubscription(HOME_POSTS_SUB)),
});

export const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageComponent);
