import React from 'react';
import { Link } from 'react-router-dom';
const landingBackground = require('../../images/landing-bg.jpg');

const Landing = () => {
    return (
        <React.Fragment>
            <div
                style={{ backgroundImage: `url(${landingBackground})` }}
                class="jumbotron jumbotron-fluid landing border-bottom"
            >
                <h1 className="mb-5 text-light">Lezu</h1>
                <h4 className="landing-lead w-50 mx-auto text-light mb-5 pb-5">
                    Lezu is a free service which allows users to <em>create</em>{' '}
                    and <em>train</em> with their own vocabulairy lists to learn
                    new words in mulitple languages.
                </h4>
                <div className="container">
                    <div className="row">
                        <div className="col-md">
                            <Link
                                to="/login"
                                className="btn btn-light btn-lg btn-block my-2"
                            >
                                Login
                            </Link>
                        </div>
                        <div className="col-md">
                            <Link
                                to="/register"
                                className="btn btn-warning btn-lg btn-block my-2"
                            >
                                register
                            </Link>
                        </div>
                    </div>
                </div>
                <a
                    style={{ marginTop: '20vh' }}
                    className="fa fa-angle-down fa-5x text-white"
                ></a>
            </div>
            <div style={{ marginTop: '100px' }} className="container my-5">
                <h1 className="display-1">Features</h1>
                <div className="row my-5">
                    <div className="col-lg col-md-12">
                        <i className="fa fa-globe fa-5x d-block mt-5 mb-3"></i>
                        <p className="text-black-50 h5">
                            Always wanted to learn multiple languages at time?
                            Lezu allows you to broaden your vocabulairy in
                            multiple languages at a time, supporting language
                            specific keyboards.
                        </p>
                    </div>
                    <div className="col-lg col-md-12">
                        <i className="fa fa-list-alt fa-5x d-block mt-5 mb-3"></i>
                        <p className="text-black-50 h5">
                            Create your own custom vocabulairy lists. Group
                            words together in lists that fit your needs and
                            train with your own lists to fast-track your
                            learning.
                        </p>
                    </div>
                    <div className="col-lg col-md-12">
                        <i className="fa fa-exclamation-triangle fa-5x d-block mt-5 mb-3"></i>
                        <p className="text-black-50 h5">
                            Supports spelling error recognition which takes
                            small typing mistakes into consideration. This helps
                            human errors from ruining your experience
                        </p>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-lg-4 col-md-12">
                        <i className="fa fa-check fa-5x d-block mt-5 mb-3"></i>
                        <p className="text-black-50 h5">
                            Correct answers, wrong answers and spelling mistakes
                            are all recored with the words you train. This helps
                            Lezu to provide you with the ability to train the
                            words you have difficulty with.
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <i className="fa fa-pencil-square-o fa-5x d-block mt-5 mb-3"></i>
                        <p className="text-black-50 h5">
                            Train your words using a wide variety of filters.
                            Filter
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Landing;
