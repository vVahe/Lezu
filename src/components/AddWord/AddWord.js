import React, { Component } from 'react';
import classnames from 'classnames';
import CategoryInput from './CategoryInput';

class AddWord extends Component {
    state = {
        word: '',
        word_meaning: '',
        language_id: '',
        categories: [],
        errors: {}
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        const errors = {};

        return (
            <div className="card add-word-form mx-auto my-5 shadow-lg">
                <div className="card-header">
                    <h3>Add Word</h3>
                </div>
                <div className="card-body">
                    <p className="lead">Add a new word to your word list</p>
                    <form noValidate onSubmit={this.onSubmit}>
                        <div className="form-row">
                            <div className="col my-4 form-group">
                                <label
                                    htmlFor="word"
                                    className="float-left ml-2"
                                >
                                    Word
                                </label>
                                <input
                                    name="word"
                                    type="text"
                                    className={classnames('form-control', {
                                        'is-invalid': errors.word
                                    })}
                                    id="word"
                                    placeholder="Type the word you want to add"
                                    value={this.state.word}
                                    onChange={this.onChange}
                                />
                                {errors.word && (
                                    <div className="invalid-feeback float-left text-danger mb-2 mt-1">
                                        {errors.word}
                                    </div>
                                )}
                            </div>

                            <div className="col my-4 form-group">
                                <label
                                    htmlFor="word_meaning"
                                    className="float-left ml-2"
                                >
                                    Word Meaning
                                </label>
                                <input
                                    name="word_meaning"
                                    type="text"
                                    className={classnames('form-control', {
                                        'is-invalid': errors.word_meaning
                                    })}
                                    id="word"
                                    placeholder="Type the meaning of the word"
                                    value={this.state.word}
                                    onChange={this.onChange}
                                />
                                {errors.word_meaning && (
                                    <div className="invalid-feeback float-left text-danger mb-2 mt-1">
                                        {errors.word_meaning}
                                    </div>
                                )}
                            </div>
                        </div>
                        <CategoryInput />

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

export default AddWord;
