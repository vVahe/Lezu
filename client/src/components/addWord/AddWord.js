import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addWord } from '../../store/actions/wordlistActions';
import { getLanguages } from '../../store/actions/languageActions';

import LanguageInput from './LanguageInput';
import WordInput from './WordInput';
import WordMeaningInput from './WordMeaningInput';

class AddWord extends Component {
    state = {
        word: '',
        word_meaning: '',
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
        this.props.addWord(this.state, this.props.history);
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    languageChangeHandler = input => {
        this.setState({ language: input });
    };

    render() {
        const { errors } = this.state;

        return (
            <div className="row m-0">
                <div className="co-12 col-md-12 col-lg-6 mx-auto">
                    <div className="card add-word-form mx-auto my-5 shadow-lg">
                        <div className="card-header">
                            <h3>Add Word</h3>
                        </div>
                        <div className="card-body">
                            <p className="lead">
                                Add a new word to your word list
                            </p>
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
                                    />
                                    <WordMeaningInput
                                        errors={errors}
                                        onChange={this.onChange}
                                        word={this.state.word_meaning}
                                    />
                                </div>
                                <div className="form-row">
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
                                    <i class="fa fa-long-arrow-left mr-2"></i>{' '}
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
