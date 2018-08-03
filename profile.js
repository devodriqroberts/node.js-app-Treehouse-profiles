//Prepare
//Plan
//Perform
//Perfect solution

//Problem: We need a simple way to look at a user's badge count and JavaScript points
//Solution: Use node.js to connect to Treehouse API to get profile info to print out.

const https = require('https');

const printMessage = (username,badgeCount, points) => {
  const message =  `${username} has ${badgeCount} total badge(s) and ${points} total points in JavaScript.`;
  console.log(message);
}

const getProfile = (username) => {

  // 1. Connect to api url. (https://teamtreehouse.com/username.json)

  const request = https.get(`https://teamtreehouse.com/${username}.json`, (res) => {
    //console.dir(res.statusCode);
    let body = "";

    // 2. Read data.

    res.on('data', (data) => {

      body += data.toString()

    });

    res.on('end', () => {
      // 3. Parse data.
      const profile = JSON.parse(body);
      //console.dir(profile);

      // 4. Print data.
      printMessage(username,profile.badges.length, profile.points.JavaScript);
    });
    



  })

};

const users = ["devodriqroberts", "alenaholligan", "davemcfarland", "chalkers"]

users.forEach(getProfile);

// getProfile('devodriqroberts');
