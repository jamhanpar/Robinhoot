import { connect } from 'react-redux';
import { signup, reset } from '../../actions/session_actions';
import SignupForm from './signup_form';
import SessionForm from './session_form';

const mStP = ({ errors }) => {
    return {
    user: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
    },
    errors: errors.session.length > 0 ? [
        { "first_name": `${errors.session[0]}`},
        { "last_name": `${errors.session[1]}`},
        { "email": `${errors.session[2]}`},
        { "password": `${errors.session[3]}`}
    ] : [],
    formType: 'Sign Up'
}};

const mDtP = dispatch => ({
    processForm: (formUser) => dispatch(signup(formUser)),
    resetErrors: () => dispatch(reset())
});

export default connect(mStP, mDtP)(SignupForm);