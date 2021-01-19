import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import SignupForm from './signup_form';

const mStP = (state, ownProps) => ({
    user: {
        username: '',
        email: '',
        password: '',
    },
    formType: 'Sign Up'
});

const mDtP = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser))
});

export default connect(mStP, mDtP)(SignupForm);