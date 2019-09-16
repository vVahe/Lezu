import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ProfileSideBar from './ProfileSideBar';
import QuickLinks from './QuickLinks';
import QuickReviewLinks from './QuickReviewLinks';
import RecentWords from './RecentWords';
import DifficultWords from './DifficultWords';
import { getStats } from '../../store/actions/statsActions';

class Dashboard extends Component {
    componentDidMount() {
        this.props.getStats();
    }

    render() {
        const {
            nr_words,
            nr_lists,
            nr_languages,
            nr_words_correct,
            nr_words_reviewed,
            nr_words_incorrect,
            recent_words,
            difficult_words
        } = this.props.stats;
        const { user } = this.props.auth;

        return (
            <Fragment>
                <h1 className="display-2 my-2">Dashboard</h1>
                <hr />
                <div className="row w-75 mx-auto">
                    <ProfileSideBar
                        username={user.username}
                        nr_words={nr_words}
                        nr_lists={nr_lists}
                        nr_languages={nr_languages}
                        nr_words_correct={nr_words_correct}
                        nr_words_reviewed={nr_words_reviewed}
                        nr_words_incorrect={nr_words_incorrect}
                    />
                    <div className="col-12 col-sm-12 col-md-8 col-lg-9">
                        <QuickLinks />
                        <QuickReviewLinks />
                        <RecentWords recent_words={recent_words} />
                        <DifficultWords difficult_words={difficult_words} />
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
    { getStats }
)(Dashboard);
