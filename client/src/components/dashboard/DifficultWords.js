import React from 'react';

export default function DifficultWords(props) {
    return (
        <React.Fragment>
            <div className="row ml-1">
                <h4 className="float-left text-secondary">Difficult Words</h4>
            </div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 card py-4">
                        <table className="table table-sm">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Word</th>
                                    <th scope="col">Meaning</th>
                                    <th scope="col">Language</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.difficult_words.map((word, key) => {
                                    return (
                                        <tr key={key}>
                                            <td>{word.word}</td>
                                            <td>{word.word_meaning}</td>
                                            <td>{word.language_id}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
