import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {
        return (
            <div className="container">
                <p>{this.props.auth.user.username}</p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    null
)(Dashboard);
