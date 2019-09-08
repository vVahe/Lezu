import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import {
    getToReviewWords,
    updateWordInReview,
    setWordReview,
    removeToReviewWords
} from '../../store/actions/wordReviewActions';

class Review extends Component {
    state = {
        word_meaning: ''
    };

    onChange = e => {
        this.setState({
            word_meaning: e.target.value
        });
    };

    retrieveWords = e => {
        this.props.getToReviewWords(e.target.value);
    };

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

    nextWord = () => {
        this.props.updateWordInReview(this.props.wordReview.counter + 1);
        this.setState({ word_meaning: '' });
    };

    render() {
        const { words, counter, loaded, result } = this.props.wordReview;

        let nextButton = (
            <button disabled className="btn btn-outline-primary mx-2">
                Next Word
            </button>
        );

        let anwerInput = (
            <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Give translation..."
                value={this.state.word_meaning}
                onChange={this.onChange}
            />
        );

        if (!(result === 'none')) {
            nextButton = (
                <button
                    onClick={this.nextWord}
                    className="btn btn-primary mx-2"
                >
                    Next Word
                </button>
            );
            anwerInput = (
                <input
                    disabled
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Give translation..."
                    value={this.state.word_meaning}
                    onChange={this.onChange}
                />
            );
        }

        return (
            <div className="container my-5">
                <h3>Review Words</h3>
                <p className="lead">
                    Choose which words to review by using the options below
                </p>
                <div className="my-5">
                    {!loaded && (
                        <button
                            onClick={this.retrieveWords}
                            className="btn btn-outline-primary btn-large"
                            value="words-retrieve/unreviewed_words"
                        >
                            Unreviewed Words
                        </button>
                    )}
                </div>

                {loaded && (
                    <div class="card text-center">
                        <div class="card-header">
                            <h5 className="card-title">
                                Give the correct translation of the words (
                                {counter}/{words.length})
                            </h5>
                        </div>
                        <div
                            className={classnames('card-body', {
                                'bg-success': result === 'correct',
                                'bg-danger': result === 'incorrect'
                            })}
                        >
                            <div className="form-row mt-3 rounded mx-auto">
                                <div className="col form-group">
                                    <input
                                        disabled
                                        className="form-control form-control-lg"
                                        type="text"
                                        placeholder={`${words[counter].word}`}
                                    />
                                </div>
                                <div className="col form-group">
                                    {anwerInput}
                                </div>
                                <div className="col-2 form-group">
                                    <button
                                        onClick={this.reviewWord}
                                        className="btn btn-warning btn-block btn-lg"
                                    >
                                        Check Word
                                    </button>
                                </div>
                            </div>
                            {result === 'incorrect' && (
                                <div>
                                    <h5 className="text-light">
                                        Correct answer{' '}
                                    </h5>
                                    <h3 className="text-warning">
                                        {words[counter].word_meaning}
                                    </h3>
                                </div>
                            )}
                        </div>
                        <div class="card-footer text-muted">{nextButton}</div>
                    </div>
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
        removeToReviewWords
    }
)(Review);
