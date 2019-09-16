import React from 'react';

export default function ReviewResult(props) {
    return (
        <table className="table table-striped shadow-lg bg-white mt-5">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Word</th>
                    <th scope="col">Meaning</th>
                </tr>
            </thead>
            <tbody>
                {props.words.map((word, key) => {
                    return (
                        <tr>
                            <th scope="row">{key}</th>
                            <td>{word.word}</td>
                            <td>{word.word_meaning}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
