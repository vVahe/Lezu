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
                            <h5>Dashboard</h5>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="word-list" className="nav-link">
                            <h5>Word List</h5>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="reviewing" className="nav-link">
                            <h5>Review</h5>
                        </NavLink>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item list-group-item">
                        Logged in as {user.username}
                    </li>
                    <li className="nav-item">
                        <Link to="/">
                            <button
                                className="btn btn-lg btn-outline-primary m-2 my-sm-0"
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
            <div className="bg-white border border-bottom mb-5">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                        <nav className="navbar navbar-light">
                            <Link to="/" className="navbar-brand mr-5">
                                <h4>Lezu</h4>
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

                        <div
                            className="collapse navbar-collapse"
                            id="navbarCollapse"
                        >
                            {isAuthenticated ? authLinks : guestLinks}
                        </div>
                    </nav>
                </div>
            </div>
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
