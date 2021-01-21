import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';
import SessionForm from './session_form';

const mStP = ({ errors }) => ({
    user: {
        username: '',
        password: '',
    },
    errors: errors.session,
    formType: 'Sign In'
});

const mDtP = dispatch => ({
    processForm: formUser => dispatch(login(formUser))
});

export default connect(mStP, mDtP)(SessionForm);