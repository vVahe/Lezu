import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchCategory } from '../../store/actions/categoryActions';
import { searchLanguage } from '../../store/actions/languageActions';
import isEmpty from '../../utils/isEmpty';

import CategoryInput from './CategoryInput';
import LanguageInput from './LanguageInput';
import WordInput from './WordInput';
import WordMeaningInput from './WordMeaningInput';

class AddWord extends Component {
    state = {
        word: '',
        word_meaning: '',
        language_id: null,
        categories: [],
        errors: {}
    };

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
        console.log(this.state);
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    categoryChangeHandler = input => {
        const inputToLowerCase = input.toLowerCase();
        this.setState({ categories: inputToLowerCase });
        return inputToLowerCase;
    };

    loadCategories = async input => {
        this.props.searchCategory(input);
        if (!isEmpty(input)) {
            await this.props.searchCategory(input);
            return this.props.category.categories;
        }
    };

    languageChangeHandler = input => {
        const inputToLowerCase = input.toLowerCase();
        this.setState({ language: inputToLowerCase });
        return inputToLowerCase;
    };

    loadLanguages = async input => {
        if (!isEmpty(input)) {
            await this.props.searchLanguage(input);
            return this.props.language.languages;
        }
    };

    render() {
        const { errors } = this.state;

        return (
            <div className="card add-word-form mx-auto my-5 shadow-lg">
                <div className="card-header">
                    <h3>Add Word</h3>
                </div>
                <div className="card-body">
                    <p className="lead">Add a new word to your word list</p>
                    <form className="mx-5" noValidate onSubmit={this.onSubmit}>
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
                            <CategoryInput
                                loadCategories={this.loadCategories}
                                errors={errors}
                                categoryChangeHandler={
                                    this.categoryChangeHandler
                                }
                                categories={this.state.categories}
                            />
                            <LanguageInput
                                loadLanguages={this.loadLanguages}
                                errors={errors}
                                languageChangeHandler={
                                    this.languageChangeHandler
                                }
                                languages={this.state.language}
                            />
                        </div>

                        <button
                            className="btn btn-outline-primary btn-block w-50 mx-auto mt-5"
                            type="submit"
                        >
                            Add Word
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    category: state.category,
    language: state.language,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { searchCategory, searchLanguage }
)(AddWord);
