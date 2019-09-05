import React from 'react';
import AsyncSelect from 'react-select/async';

export default function CategoryInput(props) {
    return (
        <div className="col my-4 form-group">
            <label>
                <h5>Categories</h5>
            </label>
            <AsyncSelect
                className="form-control-lg"
                cacheOptions
                isMulti
                loadOptions={e => props.loadCategories(e)}
                onInputChange={e => props.categoryChangeHandler(e)}
                placeholder="Select categories"
            />
            {props.errors.category && (
                <div className="invalid-feeback float-left text-danger mb-2 mt-1">
                    {props.errors.category}
                </div>
            )}
        </div>
    );
}
