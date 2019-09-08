import React from 'react';

export default function ReviewOptions(props) {
    return (
        <div className="my-5">
            <button
                onClick={e => props.retrieveWords(e)}
                className="btn btn-outline-primary btn-large mx-1"
                value="words-retrieve/unreviewed_words"
            >
                Unreviewed Words
            </button>

            <button
                onClick={e => props.retrieveWords(e)}
                className="btn btn-outline-primary btn-large mx-1"
                value="words-retrieve/recently_added_words/2"
            >
                Recently added
            </button>
        </div>
    );
}
