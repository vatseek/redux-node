import React, { Component } from 'react';
import Form, { FromInputField } from './Form';

class Register extends Component {
    handleSubmit(e) {
        e.preventDefault();
        console.log('sub4');
    }
    handleChange(e) {
        e.preventDefault();
    }
    render() {
        return (
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <Form method="post" action="/register" onSubmit={this.handleSubmit}>
                        <FromInputField label="login" name="name" value="" onChange={this.handleChange}/>
                        <FromInputField label="Email" name="email" value="" onChange={this.handleChange}/>
                        <FromInputField label="Password" name="password" value="" type="password" onChange={this.handleChange}/>
                        <FromInputField label="Password Confirm" name="password" value="" type="password_confirm" onChange={this.handleChange}/>
                        <button type="submit" className="btn btn-default">
                            Submit
                        </button>
                    </Form>
                </div>
                <div className="col-lg-4"></div>
            </div>
        )
    }
}

export default Register;