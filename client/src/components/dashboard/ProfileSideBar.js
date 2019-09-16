import React from 'react';
const defaultProfilePic = require('../../images/default-profile-pic.png');

export default function ProfileSideBar(props) {
    return (
        <div className="col col-12 col-sm-12 col-md-4 col-lg-3 mb-2">
            <div class="card profile-stats">
                <div class="card-body">
                    <img src={`${defaultProfilePic}`} alt="profile pic" />
                </div>
                <h2>{props.username}</h2>
                <hr />
                <h4>
                    <span># Words:</span> {props.nr_words}
                </h4>
                <h4>
                    <span># Lists:</span> {props.nr_lists}
                </h4>
                <h4>
                    <span># Languages:</span> {props.nr_languages}
                </h4>
                <hr />
                <h6>
                    <span># of words reviewed:</span> {props.nr_words_reviewed}
                </h6>
                <h6>
                    <span># of words correct:</span> {props.nr_words_correct}
                </h6>
                <h6>
                    <span># of words incorrect:</span>{' '}
                    {props.nr_words_incorrect}
                </h6>
            </div>
        </div>
    );
}
