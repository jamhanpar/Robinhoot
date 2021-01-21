import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Dashboard from './dashboard';

const mStP = dispatch => ({

});

const mDtP = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(mStP, mDtP)(Dashboard);