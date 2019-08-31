import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../../store/actions/authActions';
import { connect } from 'react-redux';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Login extends Component {
    state = {
        username: '',
        password: '',
        errors: {}
    };

    onSubmit = e => {
        e.preventDefault();

        const loginDetails = {
            username: this.state.username.toLowerCase(),
            password: this.state.password
        };

        this.props.loginUser(loginDetails);
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }

    componentDidUpdate(prevProps) {
        if (
            JSON.stringify(this.props.errors) !==
            JSON.stringify(prevProps.errors)
        ) {
            this.setState({
                errors: this.props.errors
            });
        }

        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }

    render() {
        const { errors } = this.state;

        return (
            <div className="card register-form mx-auto my-5 shadow-lg">
                <div className="card-header">
                    <h3>Login</h3>
                </div>
                <div class="card-body">
                    <p className="lead">Login to your Word-Trainer account</p>
                    <form className="my-4" noValidate onSubmit={this.onSubmit}>
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
                                    type="password"
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

                        <button
                            className="btn btn-primary btn-block w-50 mx-auto mt-5"
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

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { loginUser }
)(Login);
