import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import {
    getToReviewWords,
    updateWordInReview,
    setWordReview,
    removeToReviewWords
} from '../../store/actions/wordReviewActions';

import ReviewOptions from './ReviewOptions';
import ReviewCard from './ReviewCard';

class Review extends Component {
    state = {
        word_meaning: ''
    };

    // sets input of user to the component state
    onChange = e => {
        this.setState({
            word_meaning: e.target.value
        });
    };

    // retrieves the list of words
    retrieveWords = e => {
        this.props.getToReviewWords(e.target.value);
    };

    // reviews for for correctness
    reviewWord = () => {
        const { words, counter } = this.props.wordReview;
        const word_id = words[counter].word_id;
        if (
            words[counter].word_meaning.trim().toLowerCase() ===
            this.state.word_meaning.trim().toLowerCase()
        ) {
            this.props.setWordReview(word_id, 'correct');
        } else {
            this.props.setWordReview(word_id, 'incorrect');
        }
    };

    // get the next word to be reviewed
    nextWord = () => {
        this.props.updateWordInReview(this.props.wordReview.counter + 1);
        this.setState({ word_meaning: '' });
    };

    render() {
        const { words, counter, loaded, result } = this.props.wordReview;

        return (
            <div className="container my-5">
                <h3>Review Words</h3>
                {!loaded && <p className="lead">
                    Choose which words to review by using the options below
                </p>}

                {!loaded && (
                    <ReviewOptions retrieveWords={this.retrieveWords} />
                )}

                {loaded && 
                    <ReviewCard counter={counter} words={words} result={result} loaded={loaded} reviewWord={this.reviewWord} nextWord={this.nextWord} changeHandler={this.onChange} word_meaning={this.state.word_meaning} /> 
                }


            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    wordReview: state.wordReview,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    {
        getToReviewWords,
        updateWordInReview,
        setWordReview,
        removeToReviewWords
    }
)(Review);
