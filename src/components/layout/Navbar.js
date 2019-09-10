import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../store/actions/authActions';

class Navbar extends Component {
    logoutHandler = () => {
        this.props.logoutUser();
    };

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink to="/dashboard" className="nav-link">
                            Dashboard
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="word-list" className="nav-link">
                            Word List
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="reviewing" className="nav-link">
                            Review
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/profile" className="nav-link">
                            Profile
                        </NavLink>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <p>{user.username}</p>
                    </li>
                    <li className="nav-item">
                        <Link to="/">
                            <button
                                className="btn btn-outline-primary m-2 my-sm-0"
                                onClick={this.logoutHandler}
                            >
                                Logout
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        );

        const guestLinks = (
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/login">
                            <button
                                className="btn btn-outline-success m-2 my-sm-0"
                                type="submit"
                            >
                                Login
                            </button>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register">
                            <button
                                className="btn btn-outline-primary m-2 my-sm-0"
                                type="submit"
                            >
                                Register
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        );

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <nav className="navbar navbar-light">
                    <Link to="/" className="navbar-brand">
                        <i className="fa fa-spinner fa-spin px-2" />
                        Word-Trainer
                    </Link>
                </nav>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
            </nav>
        );
    }
}

Navbar.propTypes = {
    auth: PropTypes.object.isRequired,
    logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Navbar);
