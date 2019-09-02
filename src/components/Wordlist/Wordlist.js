import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wordlist extends Component {
    render() {
        return <div></div>;
    }
}

Wordlist.propTypes = {
    auth: PropTypes.object.isRequired,
    wordlist: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    wordlist: state.wordlist,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    null
)(Wordlist);
