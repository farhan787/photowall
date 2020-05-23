import Main from './Main';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import * as actions from '../redux/actions';

// Provides the data to the presentational components
// Presentational components receives the data via props

function mapStateToProps(state) {
  return {
    posts: state,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
export default App;
