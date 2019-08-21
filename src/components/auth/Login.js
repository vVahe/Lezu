import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    state = {
        username: '',
        password: ''
    };

    onSubmit = e => {
        e.preventDefault();
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        return (
            <div className="card register-form mx-auto my-5 shadow-lg">
                <div className="card-header">
                    <h3>Login</h3>
                </div>
                <div class="card-body">
                    <p className="lead">Login to your Word-Trainer account</p>
                    <form className="my-4" onSubmit={this.onSubmit}>
                        <div class="col-auto my-4">
                            <label class="sr-only" htmlFor="username">
                                Username
                            </label>
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <i className="fa fa-user" />
                                    </div>
                                </div>
                                <input
                                    name="username"
                                    type="text"
                                    class="form-control"
                                    id="username"
                                    placeholder="username"
                                    value={this.state.username}
                                    onChange={this.onChange}
                                />
                            </div>
                        </div>

                        <div class="col-auto my-4">
                            <label class="sr-only" htmlFor="password">
                                Password
                            </label>
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <i className="fa fa-key" />
                                    </div>
                                </div>
                                <input
                                    name="password"
                                    type="text"
                                    class="form-control"
                                    id="password"
                                    placeholder="password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                            </div>
                        </div>

                        <button
                            className="btn btn-primary btn-block w-50 mx-auto"
                            type="submit"
                        >
                            Login
                        </button>
                    </form>
                    <Link to="/forgot-password">
                        <p className="d-inline">Forgot password?</p>
                    </Link>
                    <p className="d-inline mx-4">|</p>
                    <Link to="/register" className="d-inline">
                        <p className="d-inline">No account? Register here!</p>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Login;
