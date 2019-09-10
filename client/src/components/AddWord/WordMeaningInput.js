import React from 'react';
import classnames from 'classnames';

export default function WordMeaningInput(props) {
    return (
        <div className="col my-4 form-group">
            <label>
                <h5>Word Meaning</h5>
            </label>
            <input
                name="word_meaning"
                type="text"
                className={classnames('form-control form-control-lg', {
                    'is-invalid': props.errors.word_meaning
                })}
                id="word"
                placeholder="Type the meaning of the word"
                value={props.word}
                onChange={props.onChange}
            />
            {props.errors.word_meaning && (
                <div className="invalid-feeback float-left text-danger mb-2 mt-1 ml-2">
                    {props.errors.word_meaning}
                </div>
            )}
        </div>
    );
}
