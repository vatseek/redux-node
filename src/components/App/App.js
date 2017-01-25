import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top navbar-inverse">
                    <div className="">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/">TTTest</a>
                        </div>
                        <div className="navbar-collapse collapse">
                            <ul className="nav navbar-nav navbar-right">

                                <li><a href="/profile">Profile</a></li>
                                <li><a href="/logout">Logout</a></li>

                                <li><a href="/register">Register</a></li>
                                <li><a href="/login">Login</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="container-fluid">
                    <div className="row" style={{height: "80px"}}>
                        <div className="col-lg-12">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="alert alert-danger">
                                test
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
