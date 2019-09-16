import React from 'react';
import { Link } from 'react-router-dom';

export default function QuickLinks(props) {
    return (
        <React.Fragment>
            <div className="row ml-1">
                <h4 className="float-left text-secondary">Quick links</h4>
            </div>
            <div className="container mb-5">
                <div className="row justify-content-center">
                    <Link
                        className="col-md-12 col-lg-6 card quick-links"
                        to="/word-list"
                    >
                        <div className="card-body mx-auto">
                            <i className="fa fa-list-alt fa-5x"></i>
                            <h4>Word list</h4>
                        </div>
                    </Link>

                    <Link
                        className="col-md-12 col-lg-6 card quick-links"
                        to="/reviewing"
                    >
                        <div className="card-body">
                            <i className="fa fa-check fa-5x"></i>
                            <h4>Train words</h4>
                        </div>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    );
}
