import React, { Component } from 'react';
import classnames from 'classnames';

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
                        <div className="col-auto my-4">
                            <label className="sr-only" htmlFor="word">
                                Word
                            </label>
                            <input
                                name="word"
                                type="text"
                                className={classnames('form-control', {
                                    'is-invalid': errors.word
                                })}
                                id="word"
                                placeholder="word"
                                value={this.state.word}
                                onChange={this.onChange}
                            />
                            {errors.word && (
                                <div className="invalid-feeback float-left text-danger mb-2 mt-1">
                                    {errors.word}
                                </div>
                            )}
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

export default AddWord;
