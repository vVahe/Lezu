import React from 'react';

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
            <td>
                <button
                    onClick={() => props.delete(props.word_id)}
                    className="btn btn-outline-danger btn-sm"
                >
                    <i className="fa fa-times"></i>
                </button>
            </td>
        </tr>
    );
}

export default Word;
