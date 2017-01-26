import React, {Component} from 'react';
import {connect} from 'react-redux';
import Form, {FromInputField} from './Form';
import {validators} from 'validator';
import {registerUser} from 'redux/actions/userActions';
import * as _ from 'underscore';


class Register extends Component {
    state = {
        login: '',
        email: '',
        password: '',
        password_confirm: '',
        errors: []
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this._validateForm();
        if (!_.isEmpty(errors)) {
            this.setState({errors: errors});
            return false;
        }
        this.props.dispatch(registerUser(this.state));
    };

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
        e.preventDefault();
        this.setState({errors: []});
    };

    _validateForm = () => {
        let errors = {};
        validators.isEmail(this.state.email) || (errors['email'] = 'invalid Email');
        (_.isEmpty(this.state.login) || this.state.login.length < 2) && (errors['login'] = 'Name to short');
        (_.isEmpty(this.state.password) || this.state.password.length < 2) && (errors['password'] = 'Password to short');
        (this.state.password === this.state.password_confirm) || (errors['password_confirm'] = 'Confirm is not valid');

        return errors;
    };

    render() {
        const state = this.state;
        const {errors} = this.state;
        return (
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <Form method="post" action="/register" onSubmit={this.handleSubmit}>
                        <FromInputField label="login" name="login" value={state.login} error={errors.login}
                                        onChange={this.handleChange}/>
                        <FromInputField label="Email" name="email" value={state.email} error={errors.email}
                                        onChange={this.handleChange}/>
                        <FromInputField
                            label="Password"
                            name="password"
                            value={state.password}
                            type="password"
                            onChange={this.handleChange}
                            error={errors.password}
                        />
                        <FromInputField
                            label="Password Confirm"
                            name="password_confirm"
                            value={state.password_confirm}
                            error={errors.password_confirm}
                            type="password"
                            onChange={this.handleChange}
                        />
                        <button type="submit" className="btn btn-default">
                            Register
                        </button>
                    </Form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { user } = state;

    return {user};
}

export default connect(mapStateToProps)(Register);