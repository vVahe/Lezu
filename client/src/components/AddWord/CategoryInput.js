import React from 'react';
import Select from 'react-select';

export default function CategoryInput(props) {
    return (
        <div className="col my-4 form-group">
            <label>
                <h5>Categories</h5>
            </label>
            <Select
                value={props.categories}
                options={props.categoryOptions}
                onChange={e => props.categoryChangeHandler(e)}
                placeholder="Select categories"
                isSearchable={true}
                isMulti
            />
            {props.errors.category && (
                <div className="invalid-feeback float-left text-danger mb-2 mt-1 ml-2">
                    {props.errors.category}
                </div>
            )}
        </div>
    );
}
