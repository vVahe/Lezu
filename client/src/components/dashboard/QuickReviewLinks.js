import React from 'react';
import { Link } from 'react-router-dom';

export default function QuickReviewLinks(props) {
    return (
        <React.Fragment>
            <div className="row ml-1">
                <h4 className="float-left text-secondary">
                    Quick Review links
                </h4>
            </div>
            <div className="container mb-5">
                <div className="row justify-content-center">
                    <Link
                        className="col-sm-12 col-md-6 col-lg-3 card quick-links"
                        to="/reviewing"
                    >
                        <div className="card-body mx-auto">
                            <i className="fa fa-clock-o fa-3x"></i>
                            <h5>Review lastest added words</h5>
                        </div>
                    </Link>

                    <Link
                        className="col-sm-12 col-md-6 col-lg-3 card quick-links"
                        to="/reviewing"
                    >
                        <div className="card-body">
                            <i className="fa fa-times fa-3x"></i>
                            <h5>Review difficult words</h5>
                        </div>
                    </Link>
                    <Link
                        className="col-sm-12 col-md-6 col-lg-3 card quick-links"
                        to="/reviewing"
                    >
                        <div className="card-body mx-auto">
                            <i className="fa fa-question-circle-o fa-3x"></i>
                            <h5>Review random words</h5>
                        </div>
                    </Link>
                    <Link
                        className="col-sm-12 col-md-6 col-lg-3 card quick-links"
                        to="/reviewing"
                    >
                        <div className="card-body mx-auto">
                            <i className="fa fa-graduation-cap fa-3x"></i>
                            <h5>Review never reviewed words</h5>
                        </div>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    );
}
