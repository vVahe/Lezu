import React from 'react';
import Select from 'react-select';

export default function LanguageInput(props) {
    return (
        <div className="col my-4 form-group">
            <label>
                <h5>Language</h5>
            </label>
            <Select
                value={props.language}
                options={props.languageOptions}
                onChange={e => props.languageChangeHandler(e)}
                placeholder="Select language"
                isSearchable={true}
            />
            {props.errors.language && (
                <div className="invalid-feeback float-left text-danger mb-2 mt-1 ml-2">
                    {props.errors.language}
                </div>
            )}
        </div>
    );
}
