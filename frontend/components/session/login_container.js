import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const mDtP = dispatch => ({
    login: formUser => dispatch(login(formUser))
});

export default connect(null, mDtP)(LoginForm);