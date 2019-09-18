import React from 'react';
import { Link } from 'react-router-dom';
export default function WordlistOptions(props) {
    return (
        <React.Fragment>
            <Link
                to="/add-word"
                className="btn btn-lg btn-outline-success my-2 float-left"
            >
                <i className="fa fa-plus mr-2"></i> Add Word
            </Link>
            <form
                className="form-inline float-right my-2"
                onSubmit={e => props.getWordlistSort(e, props.sortValue)}
            >
                <div className="form-group ">
                    <select
                        value={props.sortValue}
                        onChange={props.sortValueChanger}
                        className="form-control form-control-lg float-right d-inline"
                    >
                        <option value="none">Order by</option>
                        <option value="created_at DESC">Newest</option>
                        <option value="created_at ASC">Oldest</option>
                        <option value="word ASC">A-Z</option>
                        <option value="word DESC">Z-A</option>
                        <option value="times_reviewed DESC">
                            Times Reviewed
                        </option>
                    </select>
                </div>
                <button type="submit" className="btn btn-lg btn-primary ml-2">
                    Sort
                </button>
            </form>
        </React.Fragment>
    );
}
