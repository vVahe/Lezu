import React from 'react';
import classnames from 'classnames';

export default function WordInput(props) {
    return (
        <div className="col-12 col-sm-12 col-md-6 form-group">
            <label className="float-left ml-1">
                <h5>Word</h5>
            </label>
            <input
                maxLength={24}
                name="word"
                type="text"
                className={classnames('form-control form-control-lg', {
                    'is-invalid': props.errors.word
                })}
                id="word"
                placeholder="..."
                value={props.word}
                onChange={props.onChange}
            />
            <small className="form-text text-muted float-right">
                {props.word_length} / 24 characters
            </small>
            {props.errors.word && (
                <div className="invalid-feeback float-left float-left text-danger mb-2 mt-1 ml-2">
                    {props.errors.word}
                </div>
            )}
        </div>
    );
}
