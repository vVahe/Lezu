import React from 'react';

export default function ReviewOptions(props) {
    return (
        <div className="my-5">
            <button
                onClick={e => props.retrieveWords(e)}
                className="btn btn-outline-primary btn-large mx-1"
                value="/words-retrieve/unreviewed_words/20"
            >
                Unreviewed Words
            </button>

            <button
                onClick={e => props.retrieveWords(e)}
                className="btn btn-outline-primary btn-large mx-1"
                value="/words-retrieve/recently_added_words/20"
            >
                Recently added
            </button>
            <button
                onClick={e => props.retrieveWords(e)}
                className="btn btn-outline-primary btn-large mx-1"
                value="/words-retrieve/difficult_words/20"
            >
                Difficult Words
            </button>
            <button
                onClick={e => props.retrieveWords(e)}
                className="btn btn-outline-primary btn-large mx-1"
                value="/words-retrieve/random_words/20"
            >
                Random Words
            </button>
            <button
                onClick={e => props.retrieveWords(e)}
                className="btn btn-outline-primary btn-large mx-1"
                value="/words-retrieve/least_reviewed_words/20"
            >
                Least Reviewed
            </button>
        </div>
    );
}
