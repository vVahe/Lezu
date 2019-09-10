import React from 'react';
import DeleteWord from './DeleteWord';

function Word(props) {
    return (
        <tr>
            <th scope="row">{props.rowNumber}</th>
            <td>{props.language}</td>
            <td>{props.word}</td>
            <td>{props.word_meaning}</td>
            <td>{props.times_reviewed}</td>
            <td>{props.times_correct}</td>
            <td>{props.times_incorrect}</td>
            <td>
                <button
                    onClick={props.edit}
                    className="btn btn-outline-primary btn-sm"
                >
                    <i className="fa fa-pencil"></i>
                </button>
            </td>
            <DeleteWord delete={props.delete} word_id={props.word_id} />
        </tr>
    );
}

export default Word;
