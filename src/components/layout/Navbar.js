import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <nav className="navbar navbar-light bg-light">
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
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to="/explained" className="nav-link">
                                What is it ?
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/profile" className="nav-link">
                                Profile
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="word-list" className="nav-link">
                                Word List
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="training" className="nav-link">
                                Train
                            </NavLink>
                        </li>
                    </ul>

                    <Link to="/login">
                        <button
                            className="btn btn-outline-success m-2 my-sm-0"
                            type="submit"
                        >
                            Login
                        </button>
                    </Link>
                    <Link to="/register">
                        <button
                            className="btn btn-outline-primary m-2 my-sm-0"
                            type="submit"
                        >
                            Register
                        </button>
                    </Link>
                </div>
            </nav>
        );
    }
}

export default Navbar;
