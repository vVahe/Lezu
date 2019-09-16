import React from 'react';
import classnames from 'classnames';

export default function ReviewCard(props) {
    let nextButton = (
        <button disabled className="btn btn-outline-primary mx-2">
            Next Word
        </button>
    );

    let reviewButton = (
        <button
            onClick={props.reviewWord}
            className="btn btn-warning btn-block btn-lg"
        >
            Check Word
        </button>
    );

    let anwerInput = (
        <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Give translation..."
            value={props.word_meaning}
            onChange={props.changeHandler}
        />
    );

    if (!(props.result === 'none') && props.counter < props.words.length) {
        nextButton = (
            <button onClick={props.nextWord} className="btn btn-primary mx-2">
                Next Word
            </button>
        );
    }

    if (props.counter === props.words.length - 1 && props.result === 'none') {
        nextButton = (
            <button disabled className="btn btn-primary mx-2">
                Show Results
            </button>
        );
    } else if (
        props.counter === props.words.length - 1 &&
        !(props.result === 'none')
    ) {
        nextButton = (
            <button
                onClick={props.showResults}
                className="btn btn-primary mx-2"
            >
                Show Results
            </button>
        );
    }

    if (!(props.result === 'none')) {
        anwerInput = (
            <input
                disabled
                className="form-control form-control-lg"
                type="text"
                placeholder="Give translation..."
                value={props.word_meaning}
                onChange={props.changeHandler}
            />
        );
        reviewButton = (
            <button
                disabled
                className="btn btn-outline-warning btn-block btn-lg"
            >
                Check Word
            </button>
        );
    }

    return (
        <div>
            <div className="card text-center mt-5">
                <div className="card-header">
                    <h5 className="card-title">
                        Give the correct translation of the words (
                        {props.counter + 1}/{props.words.length})
                    </h5>
                </div>
                <div
                    className={classnames('card-body', {
                        'bg-success': props.result === 'correct',
                        'bg-danger': props.result === 'incorrect'
                    })}
                >
                    <div className="form-row mt-3 rounded mx-auto">
                        <div className="col form-group">
                            <input
                                disabled
                                className="form-control form-control-lg"
                                type="text"
                                placeholder={`${props.words[props.counter].word}`}
                            />
                        </div>
                        <div className="col form-group">{anwerInput}</div>
                        <div className="col-2 form-group">{reviewButton}</div>
                    </div>
                    {props.result === 'incorrect' && (
                        <div>
                            <h5 className="text-light">Correct answer </h5>
                            <h3 className="text-warning">
                                {props.words[props.counter].word_meaning}
                            </h3>
                        </div>
                    )}
                </div>
                <div className="card-footer text-muted">{nextButton}</div>
            </div>
        </div>
    );
}
