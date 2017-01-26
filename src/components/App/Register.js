import React, { Component } from 'react';
import Form, { FromInputField } from './Form';
import { validators } from 'validator';
import * as _ from 'underscore';


class Register extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        password_confirm: '',
        errors: []
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this._validateForm();
        console.log(errors);
        if (errors) {
            this.setState({ errors: errors });
            console.log('valid');
            return false;
        }

        console.log('invalid');
        // TODO dispatch action
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        e.preventDefault();
        this.setState({ errors: [] });
    };

    _validateForm = () => {
        let errors = {};
        validators.isEmail(this.state.email) || (errors['email'] = 'invalid Email');
        (_.isEmpty(this.state.name) || this.state.name.length <= 3) && (errors['name'] = 'Name to short');
        (_.isEmpty(this.state.password) || this.state.password.length <= 3) && (errors['password'] = 'Password to short');
        (this.state.password === this.state.password_confirm) || (errors['password_confirm'] = 'Confirm is not valid');

        return errors;
    };

    render() {
        const state = this.state;
        const { errors } = this.state;
        return (
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <Form method="post" action="/register" onSubmit={this.handleSubmit}>
                        <FromInputField label="login" name="name" value={state.name} error={errors.name} onChange={this.handleChange}/>
                        <FromInputField label="Email" name="email" value={state.email} error={errors.email} onChange={this.handleChange}/>
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

export default Register;