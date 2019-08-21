import React, { Component } from 'react';

class Register extends Component {
    state = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        passwordRepeat: '',
        errors: {}
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
    };

    render() {
        return (
            <div className="card register-form mx-auto my-5 shadow-lg">
                <div className="card-header">
                    <h3>Register</h3>
                </div>
                <div class="card-body">
                    <p className="lead">Create your own Word-Trainer account</p>
                    <form onSubmit={this.onSubmit}>
                        <div class="col-auto my-4">
                            <label class="sr-only" htmlFor="first-name">
                                First name
                            </label>

                            <input
                                name="firstName"
                                type="text"
                                class="form-control"
                                id="first-name"
                                placeholder="First name"
                                value={this.state.firstName}
                                onChange={this.onChange}
                            />
                        </div>

                        <div class="col-auto my-4">
                            <label class="sr-only" htmlFor="last-name">
                                Last name
                            </label>

                            <input
                                name="lastName"
                                type="text"
                                class="form-control"
                                id="last-name"
                                placeholder="Last name"
                                value={this.state.lastName}
                                onChange={this.onChange}
                            />
                        </div>
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
                            <label class="sr-only" htmlFor="email">
                                Email
                            </label>
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <i className="fa fa-envelope" />
                                    </div>
                                </div>
                                <input
                                    name="email"
                                    type="email"
                                    class="form-control"
                                    id="email"
                                    placeholder="email"
                                    value={this.state.email}
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

                        <div class="col-auto my-4">
                            <label class="sr-only" htmlFor="password-repeat">
                                Password Repeat
                            </label>
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <i className="fa fa-key" />
                                    </div>
                                </div>
                                <input
                                    name="passwordRepeat"
                                    type="text"
                                    class="form-control"
                                    id="password-repeat"
                                    placeholder="password repeat"
                                    value={this.state.passwordRepeat}
                                    onChange={this.onChange}
                                />
                            </div>
                        </div>
                        <button className="btn btn-primary" type="submit">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;
