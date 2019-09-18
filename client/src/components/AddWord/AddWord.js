import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addWord } from '../../store/actions/wordlistActions';
import { getLanguages } from '../../store/actions/languageActions';

import LanguageInput from './LanguageInput';
import WordInput from './WordInput';
import WordMeaningInput from './WordMeaningInput';
import WordNote from './WordNote';

class AddWord extends Component {
    state = {
        word: '',
        word_length: 0,
        word_meaning: '',
        word_meaning_length: 0,
        word_note: '',
        word_note_length: 0,
        language: null,
        errors: {}
    };

    componentDidMount() {
        this.props.getLanguages();
    }

    componentDidUpdate(prevProps) {
        if (
            JSON.stringify(this.props.errors) !==
            JSON.stringify(prevProps.errors)
        ) {
            this.setState({
                errors: this.props.errors
            });
        }
    }

    onSubmit = e => {
        e.preventDefault();
        const newWord = {
            word: this.state.word.toLowerCase().trim(),
            word_meaning: this.state.word_meaning.toLowerCase().trim(),
            word_note: this.state.word_note.toLowerCase().trim(),
            language_id:
                this.state.language != null ? this.state.language.value : ''
        };
        this.props.addWord(newWord, this.props.history);
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            [`${e.target.name}_length`]: e.target.value.length
        });
    };

    languageChangeHandler = input => {
        this.setState({ language: input });
    };

    render() {
        const { errors } = this.state;

        return (
            <div className="row m-0">
                <div className="co-12 col-md-12 col-lg-8 mx-auto">
                    <div className="card add-word-form mx-auto my-5 shadow-lg">
                        <div className="card-header">
                            <h3>Add Word</h3>
                        </div>
                        <div className="card-body">
                            <form
                                className="mx-5"
                                noValidate
                                onSubmit={this.onSubmit}
                            >
                                <div className="form-row">
                                    <WordInput
                                        errors={errors}
                                        onChange={this.onChange}
                                        word={this.state.word}
                                        word_length={this.state.word_length}
                                    />
                                    <WordMeaningInput
                                        errors={errors}
                                        onChange={this.onChange}
                                        word_meaning={this.state.word_meaning}
                                        word_meaning_length={
                                            this.state.word_meaning_length
                                        }
                                    />
                                </div>
                                <hr />
                                <div className="form-row">
                                    <WordNote
                                        errors={errors}
                                        onChange={this.onChange}
                                        word_note={this.state.word_note}
                                        word_note_length={
                                            this.state.word_note_length
                                        }
                                    />
                                    <LanguageInput
                                        errors={errors}
                                        languageOptions={
                                            this.props.language.languages
                                        }
                                        languageChangeHandler={
                                            this.languageChangeHandler
                                        }
                                        language={this.state.language}
                                    />
                                </div>

                                <Link
                                    to="/word-list"
                                    className="btn btn-lg btn-outline-primary  mt-5 mx-2"
                                >
                                    <i className="fa fa-long-arrow-left mr-2"></i>{' '}
                                    Word List
                                </Link>
                                <button
                                    className="btn btn-lg btn-outline-success mt-5 mx-2"
                                    type="submit"
                                >
                                    Add Word
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    language: state.language,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { getLanguages, addWord }
)(AddWord);
