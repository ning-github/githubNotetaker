var api = {
  getRepos(username){
    username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}/repos`;
    /* ^-- same as:
    var url = "https://api.github/com/users/" + username + "/repos"
    */

    // fetch is React Native's way of http request
    return fetch(url).then( //   it is promise based
      (res) => res.json()   // chain using ES6 fat arrow
     )
  },

  getBio(username){
    username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}`;
    return fetch(url).then(
      (res) => res.json()
      )
  }
};

module.exports = api;