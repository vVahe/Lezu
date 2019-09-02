import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getWordlist } from '../../store/actions/wordlistActions';

class Wordlist extends Component {
    componentDidMount() {
        this.props.getWordlist();
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.wordlist.loaded === this.props.wordlist.loaded) {
            return false;
        }
        return true;
    }

    render() {
        return <div>Word-list</div>;
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
    { getWordlist }
)(Wordlist);
