import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    getToReviewWords,
    updateWordInReview,
    setWordReview,
    removeToReviewWords,
    showResults
} from '../../store/actions/wordReviewActions';

import ReviewOptions from './ReviewOptions';
import ReviewCard from './ReviewCard';
import ReviewResult from './ReviewResult';

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

    finishReview = () => {
        this.setState({ word_meaning: '' });
        this.props.removeToReviewWords;
    };

    render() {
        const { words, counter, loaded, result, done } = this.props.wordReview;

        return (
            <div className="container my-5">
                <h1 className="display-2">Review Words</h1>
                {!loaded && (
                    <p className="lead">
                        Choose which words to review by using the options below
                    </p>
                )}

                {!loaded && (
                    <ReviewOptions
                        retrieveWords={e =>
                            this.props.getToReviewWords(e.target.value)
                        }
                    />
                )}

                {loaded && !done && words.length > 0 && (
                    <ReviewCard
                        counter={counter}
                        words={words}
                        result={result}
                        loaded={loaded}
                        reviewWord={this.reviewWord}
                        nextWord={this.nextWord}
                        changeHandler={this.onChange}
                        word_meaning={this.state.word_meaning}
                        showResults={this.props.showResults}
                    />
                )}
                {loaded && !done && words.length === 0 && <p>No words found</p>}

                {done && <ReviewResult words={words} />}
                {done && (
                    <button
                        onClick={this.finishReview}
                        className="btn btn-primary btn-lg mt-3"
                    >
                        Finish Reviewing
                    </button>
                )}
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
        removeToReviewWords,
        showResults
    }
)(Review);
