import { connect } from 'react-redux';
import { login, reset } from '../../actions/session_actions';
import LoginForm from './login_form';
import SessionForm from './session_form';

const mStP = ({ errors }) => ({
    user: {
        email: '',
        password: '',
    },
    demo: {
        email: 'demo',
        password: 'password',
    },
    errors: errors.session,
    formType: 'Sign In'
});

const mDtP = dispatch => ({
    processForm: formUser => dispatch(login(formUser)),
    resetErrors: () => dispatch(reset())
});

export default connect(mStP, mDtP)(SessionForm);