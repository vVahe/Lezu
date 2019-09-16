import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ProfileSideBar from './ProfileSideBar';
import QuickLinks from './QuickLinks';
class Dashboard extends Component {
    render() {
        return (
            <Fragment>
                <h1 className="my-5">Dashboard</h1>
                <div className="row w-75 mx-auto">
                    <ProfileSideBar username={this.props.auth.user.username} />
                    <div className="col-12 col-sm-12 col-md-8 col-lg-9">
                        <QuickLinks />
                        <div className="row ml-1">
                            <h4 className="float-left text-secondary">
                                Quick Review links
                            </h4>
                        </div>
                        <div className="container mb-5">
                            <div className="row">
                                <div class="col card">
                                    <div class="card-body"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row ml-1">
                            <h4 className="float-left text-secondary">
                                Recently added words
                            </h4>
                        </div>
                        <div className="container mb-5">
                            <div className="row">
                                <div class="col card">
                                    <div class="card-body"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row ml-1">
                            <h4 className="float-left text-secondary">
                                Difficult words
                            </h4>
                        </div>
                        <div className="container mb-5">
                            <div className="row">
                                <div class="col card">
                                    <div class="card-body"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    stats: state.stats
});

export default connect(
    mapStateToProps,
    null
)(Dashboard);
