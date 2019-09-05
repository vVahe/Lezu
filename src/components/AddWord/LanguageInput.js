import React from 'react';
import AsyncSelect from 'react-select/async';

export default function LanguageInput(props) {
    return (
        <div className="col my-4 form-group">
            <label>
                <h5>Language</h5>
            </label>
            <AsyncSelect
                className="form-control-lg"
                cacheOptions
                loadOptions={e => props.loadLanguages(e)}
                onInputChange={e => props.languageChangeHandler(e)}
                placeholder="Select language"
            />
            {props.errors.language && (
                <div className="invalid-feeback float-left text-danger mb-2 mt-1">
                    {props.errors.language}
                </div>
            )}
        </div>
    );
}
