import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form, { FromInputField } from './Form';
import { loginUser} from 'redux/actions/userActions';
import * as _ from 'underscore';


class Login extends Component {
    state = {
        login: '',
        password: '',
        errors: []
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this._validateForm();
        if (!_.isEmpty(errors)) {
            this.setState({ errors: errors });
            return false;
        }
        this.props.dispatch(loginUser(this.state));
    };

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
        e.preventDefault();
        this.setState({errors: []});
    };

    _validateForm = () => {
        let errors = {};
        (_.isEmpty(this.state.login) || this.state.login.length < 2) && (errors['login'] = 'Name to short');
        (_.isEmpty(this.state.password) || this.state.password.length < 2) && (errors['password'] = 'Password to short');

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
                        <FromInputField label="login" name="login" value={state.login} error={errors.login}
                                        onChange={this.handleChange}/>
                        <FromInputField
                            label="Password"
                            name="password"
                            value={state.password}
                            type="password"
                            onChange={this.handleChange}
                            error={errors.password}
                        />
                        <button type="submit" className="btn btn-default">
                            Login
                        </button>
                    </Form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { user } = state;
    return { user };
}

export default connect(mapStateToProps)(Login);