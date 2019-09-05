import React from 'react';
import classnames from 'classnames';

export default function WordInput(props) {
    return (
        <div className="col my-4 form-group">
            <label>
                <h5>Word</h5>
            </label>
            <input
                name="word"
                type="text"
                className={classnames('form-control form-control-lg', {
                    'is-invalid': props.errors.word
                })}
                id="word"
                placeholder="Type the word you want to add"
                value={props.word}
                onChange={props.onChange}
            />
            {props.errors.word && (
                <div className="invalid-feeback float-left text-danger mb-2 mt-1 ml-2">
                    {props.errors.word}
                </div>
            )}
        </div>
    );
}
