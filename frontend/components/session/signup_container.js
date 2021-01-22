import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';
import SessionForm from './session_form';

const mStP = ({ errors }) => ({
    user: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
    },
    errors: errors.session,
    formType: 'Sign Up'
});

const mDtP = dispatch => ({
    processForm: formUser => dispatch(signup(formUser))
});

export default connect(mStP, mDtP)(SignupForm);