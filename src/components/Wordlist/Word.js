import React from 'react';

function Word(props) {
    return (
        <tr>
            <th scope="row">{props.rowNumber}</th>
            <td>{props.language_id}</td>
            <td>{props.word}</td>
            <td>{props.word_meaning}</td>
            <td>{props.times_reviewed}</td>
            <td>{props.times_correct}</td>
            <td>{props.times_incorrect}</td>
        </tr>
    );
}

export default Word;
