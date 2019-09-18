import React from 'react';
import Select from 'react-select';

export default function LanguageInput(props) {
    return (
        <div className="col-12 col-sm-12 col-md-6 form-group">
            <label className="col-12 ml-1 mx-0 px-0">
                <h5 className="float-left">Language</h5>
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
