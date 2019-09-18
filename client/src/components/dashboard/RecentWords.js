import React from 'react';
import { Link } from 'react-router-dom';

export default function RecentWords(props) {
    return (
        <React.Fragment>
            <div className="row ml-1">
                <h4 className="float-left text-secondary">
                    Recently added words
                </h4>
            </div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 card py-4">
                        {props.recent_words.length > 0 && (
                            <ul class="list-group list-group-flush ">
                                <li class="list-group-item list-group-item-primary">
                                    <div className="container">
                                        <div className="row">
                                            <h4 className="col-6">Word</h4>
                                            <h4 className="col-6">Meaning</h4>
                                        </div>
                                    </div>
                                </li>

                                {props.recent_words.map((word, key) => {
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
                        {props.recent_words.length < 1 && (
                            <div>
                                <h4>No words recently added</h4>
                                <Link
                                    className="btn btn-lg btn-outline-success mt-2"
                                    to="/add-word"
                                >
                                    Add words
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
