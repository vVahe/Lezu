import React from 'react';
import classnames from 'classnames';

export default function WordNote(props) {
    return (
        <div className="col-12 col-sm-12 col-md-6 form-group">
            <label className="col-12 ml-1 mx-0 px-0">
                <h5 className="float-left">Word Note</h5>
            </label>

            <textarea
                maxLength={250}
                name="word_note"
                type="text"
                className={classnames('form-control form-control-lg', {
                    'is-invalid': props.errors.word_note
                })}
                placeholder="add a note..."
                value={props.word_note}
                onChange={props.onChange}
            />
            <small className="form-text text-muted float-right">
                {props.word_note_length} / 250 characters
            </small>
            {props.errors.word_note && (
                <div className="invalid-feeback float-left text-danger mb-2 mt-1 ml-2">
                    {props.errors.word_note}
                </div>
            )}
        </div>
    );
}
