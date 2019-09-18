import React from 'react';
import classnames from 'classnames';

export default function WordMeaningInput(props) {
    return (
        <div className="col-12 col-sm-12 col-md-6 form-group">
            <label className="float-left ml-1">
                <h5>Word Meaning</h5>
            </label>
            <input
                maxLength={24}
                name="word_meaning"
                type="text"
                className={classnames('form-control form-control-lg', {
                    'is-invalid': props.errors.word_meaning
                })}
                id="word"
                placeholder="..."
                value={props.word_meaning}
                onChange={props.onChange}
            />
            <small className="form-text text-muted float-right">
                {props.word_meaning_length} / 24 characters
            </small>
            {props.errors.word_meaning && (
                <div className="invalid-feeback float-left text-danger mb-2 mt-1 ml-2">
                    {props.errors.word_meaning}
                </div>
            )}
        </div>
    );
}
