import React from 'react';
const defaultProfilePic = require('../../images/default-profile-pic.png');

export default function ProfileSideBar(props) {
    return (
        <div className="col col-12 col-sm-12 col-md-4 col-lg-3">
            <div class="card profile-stats">
                <div class="card-body">
                    <img src={`${defaultProfilePic}`} alt="profile pic" />
                </div>
                <h2>{props.username}</h2>
                <hr />
                <h4>
                    <span># Words:</span> 600
                </h4>
                <h4>
                    <span># Lists:</span> 4
                </h4>
                <h4>
                    <span># Languages:</span> 2
                </h4>
                <hr />
                <h6>
                    <span># of words reviewed:</span> 5873
                </h6>
                <h6>
                    <span># of words correct:</span> 4865
                </h6>
                <h6>
                    <span># of words incorrect:</span> 1010
                </h6>
            </div>
        </div>
    );
}
