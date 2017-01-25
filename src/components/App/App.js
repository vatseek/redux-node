import React, { Component } from 'react';
import { Link } from 'react-router';

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top navbar-inverse">
                <div className="">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/">TTTest</a>
                    </div>
                    <div className="navbar-collapse collapse">
                        {this.props.user ? (
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to="/dashboard" activeClassName="active">Dashboard</Link></li>
                                <li><Link to="/logout" activeClassName="active">Logout</Link></li>
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
                <Navigation user={false} />
                <div className="container-fluid">
                    <div className="row" style={{height: "80px"}}>
                        <div className="col-lg-12">
                        </div>
                    </div>
                    {/*<div className="row">*/}
                        {/*<div className="col-lg-12">*/}
                            {/*<div className="alert alert-danger">*/}
                                {/*test*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;
