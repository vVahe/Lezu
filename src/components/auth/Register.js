import React, { Component } from 'react';

class Register extends Component {
    render() {
        return (
            <div className="card register-form mx-auto my-5 shadow-lg">
                <div className="card-header">
                    <h3>REGISTER</h3>
                </div>
                <div class="card-body">
                    <p className="lead">Create your own Word-Trainer account</p>
                    <form>
                        <div class="col-auto my-4">
                            <label class="sr-only" htmlFor="first-name">
                                First name
                            </label>

                            <input
                                type="text"
                                class="form-control"
                                id="first-name"
                                placeholder="First name"
                            />
                        </div>

                        <div class="col-auto my-4">
                            <label class="sr-only" htmlFor="last-name">
                                Last name
                            </label>

                            <input
                                type="text"
                                class="form-control"
                                id="last-name"
                                placeholder="Last name"
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
                                    type="text"
                                    class="form-control"
                                    id="username"
                                    placeholder="username"
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
                                    type="email"
                                    class="form-control"
                                    id="email"
                                    placeholder="email"
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
                                    type="text"
                                    class="form-control"
                                    id="password"
                                    placeholder="password"
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
                                    type="text"
                                    class="form-control"
                                    id="password-repeat"
                                    placeholder="password repeat"
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
