import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/userActions';
import * as _ from 'underscore';

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top navbar-inverse">
                <div className="">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/">TTTest</a>
                    </div>
                    <div className="navbar-collapse collapse">
                        {!_.isEmpty(this.props.user) ? (
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to="/dashboard" activeClassName="active">Dashboard</Link></li>
                                <li>
                                    <a onClick={e => { e.preventDefault(); this.props.dispatch(logoutUser()); }}>Logout</a>
                                </li>
                            </ul>
                        ) : (
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to="/register" activeClassName="active">Register</Link></li>
                                <li><Link to="/login" activeClassName="active">Login</Link></li>
                            </ul>
                        )}
                    </div>
                </div>
            </nav>
        );
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <Navigation user={this.props.user} dispatch={this.props.dispatch} />
                <div className="container-fluid">
                    <div className="row" style={{height: "80px"}}>
                        <div className="col-lg-12">
                        </div>
                    </div>
                    {!_.isEmpty(this.props.error) && (
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="alert alert-danger">
                                    {this.props.error}
                                </div>
                            </div>
                        </div>
                    )}
                    {this.props.children}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { user, error } = state;
    return { user, error };
}

export default connect(mapStateToProps)(App);
