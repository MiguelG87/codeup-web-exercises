"use strict";

function dateOfLastCommit(ghUsername) {
    return fetch('https://api.github.com/users/${ghUsername}/events/public', {
        headers: {
            'Authorization': 'token' ${GH_API_TOKEN}
        }
    })
}