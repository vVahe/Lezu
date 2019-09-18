import React from 'react';
import { Link } from 'react-router-dom';

export default function DifficultWords(props) {
    return (
        <React.Fragment>
            <div className="row ml-1">
                <h4 className="float-left text-secondary">Difficult Words</h4>
            </div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 card py-4">
                        {props.difficult_words.length > 0 && (
                            <ul class="list-group list-group-flush ">
                                <li class="list-group-item list-group-item-warning">
                                    <div className="container">
                                        <div className="row">
                                            <h4 className="col-6">Word</h4>
                                            <h4 className="col-6">Meaning</h4>
                                        </div>
                                    </div>
                                </li>

                                {props.difficult_words.map((word, key) => {
                                    return (
                                        <li key={key} class="list-group-item">
                                            <div className="container">
                                                <div className="row">
                                                    <h5 className="col-6 float-left">
                                                        {word.word}
                                                    </h5>
                                                    <h5 className="col-6 float-left">
                                                        {word.word_meaning}
                                                    </h5>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                        {props.difficult_words.length < 1 && (
                            <div>
                                <h4>No difficult words found.</h4>
                                <Link
                                    className="btn btn-lg btn-outline-success mt-2"
                                    to="/reviewing"
                                >
                                    Review Words
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
