import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { registerUser } from '../../store/actions/authActions';

class Register extends Component {
    state = {
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        password_repeat: '',
        errors: {}
    };

    // handle form input changes to component state
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    // handle form submit for registering
    onSubmit = e => {
        e.preventDefault();

        // create new user object
        const newUser = {
            username: this.state.username,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
            password_repeat: this.state.password_repeat
        };

        this.props.registerUser(newUser);
    };

    // set the errors to component state before
    componentDidUpdate(prevProps) {
        if (
            JSON.stringify(this.props.errors) !==
            JSON.stringify(prevProps.errors)
        ) {
            this.setState({
                errors: this.props.errors
            });
        }
    }

    render() {
        const { errors } = this.state;

        return (
            <div className="card register-form mx-auto my-5 shadow-lg">
                <div className="card-header">
                    <h3>Register</h3>
                </div>
                <div className="card-body">
                    <p className="lead">Create your own Word-Trainer account</p>
                    <form noValidate onSubmit={this.onSubmit}>
                        <div className="col-auto my-4">
                            <label className="sr-only" htmlFor="first_name">
                                First name
                            </label>
                            <input
                                name="first_name"
                                type="text"
                                className={classnames('form-control', {
                                    'is-invalid': errors.first_name
                                })}
                                id="first_name"
                                placeholder="First name"
                                value={this.state.firstName}
                                onChange={this.onChange}
                            />
                            {errors.first_name && (
                                <div className="invalid-feeback float-left text-danger mb-2 mt-1">
                                    {errors.first_name}
                                </div>
                            )}
                        </div>

                        <div className="col-auto my-4">
                            <label className="sr-only" htmlFor="last_name">
                                Last name
                            </label>
                            <input
                                name="last_name"
                                type="text"
                                className={classnames('form-control', {
                                    'is-invalid': errors.last_name
                                })}
                                id="last_name"
                                placeholder="Last name"
                                value={this.state.lastName}
                                onChange={this.onChange}
                            />
                            {errors.last_name && (
                                <div className="invalid-feeback float-left text-danger mb-2 mt-1">
                                    {errors.last_name}
                                </div>
                            )}
                        </div>
                        <div className="col-auto my-4">
                            <label className="sr-only" htmlFor="username">
                                Username
                            </label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <i className="fa fa-user" />
                                    </div>
                                </div>
                                <input
                                    name="username"
                                    type="text"
                                    className={classnames('form-control', {
                                        'is-invalid': errors.username
                                    })}
                                    id="username"
                                    placeholder="username"
                                    value={this.state.username}
                                    onChange={this.onChange}
                                />
                            </div>
                            {errors.username && (
                                <div className="invalid-feeback float-left text-danger mb-2 mt-1">
                                    {errors.username}
                                </div>
                            )}
                        </div>

                        <div className="col-auto my-4">
                            <label className="sr-only" htmlFor="email">
                                Email
                            </label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <i className="fa fa-envelope" />
                                    </div>
                                </div>
                                <input
                                    name="email"
                                    type="email"
                                    className={classnames('form-control', {
                                        'is-invalid': errors.email
                                    })}
                                    id="email"
                                    placeholder="email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                />
                            </div>
                            {errors.email && (
                                <div className="invalid-feeback float-left text-danger mb-2 mt-1">
                                    {errors.email}
                                </div>
                            )}
                        </div>

                        <div className="col-auto my-4">
                            <label className="sr-only" htmlFor="password">
                                Password
                            </label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <i className="fa fa-key" />
                                    </div>
                                </div>
                                <input
                                    name="password"
                                    type="text"
                                    className={classnames('form-control', {
                                        'is-invalid': errors.password
                                    })}
                                    id="password"
                                    placeholder="password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                            </div>
                            {errors.password && (
                                <div className="invalid-feeback float-left text-danger mb-2 mt-1">
                                    {errors.password}
                                </div>
                            )}
                        </div>

                        <div className="col-auto my-4">
                            <label
                                className="sr-only"
                                htmlFor="password-repeat"
                            >
                                Password Repeat
                            </label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <i className="fa fa-key" />
                                    </div>
                                </div>
                                <input
                                    name="password_repeat"
                                    type="text"
                                    className={classnames('form-control', {
                                        'is-invalid': errors.password_repeat
                                    })}
                                    id="password_repeat"
                                    placeholder="password repeat"
                                    value={this.state.passwordRepeat}
                                    onChange={this.onChange}
                                />
                            </div>
                            {errors.password_repeat && (
                                <div className="invalid-feeback float-left text-danger mb-2 mt-1">
                                    {errors.password_repeat}
                                </div>
                            )}
                        </div>

                        <button
                            className="btn btn-outline-primary btn-block w-50 mx-auto mt-5"
                            type="submit"
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

Register.proptype = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { registerUser }
)(Register);
