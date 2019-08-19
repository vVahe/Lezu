import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="#">
                        <img
                            src=""
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt=""
                        />
                        Word-Trainer
                    </a>
                </nav>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                    aria-controls="navbarCollapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                What is it ?
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Profile
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Word List
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Train
                            </a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <button
                            className="btn btn-outline-success my-2 my-sm-0"
                            type="submit"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </nav>
        );
    }
}

export default Navbar;
