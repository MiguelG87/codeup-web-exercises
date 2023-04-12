"use strict";

function dateOfLastCommit(ghUsername) {
    return fetch(`https://api.github.com/users/${ghUsername}/events/public`, {
        headers: {
            'Authorization': `token ${GH_API_TOKEN}`
        }
    })
        .then(response =>response.json())
        .then(events => {
            let pushEvents = events.filter(event => event.type === 'PushEvent')
            return pushEvents[0].created_at
        });
}
dateOfLastCommit("MiguelG87").then(data => console.log(new Date(data)));