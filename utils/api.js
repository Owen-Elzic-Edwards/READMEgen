const axios = require("axios");

const api = {
  getUser(username, cb) {
    const URL = "https://api.github.com/users/" + username;
    // console.log(URL)
    axios.get(URL).then(response => {
      // console.log("RESPONSE:", response);
      // console.log(response.data.avatar_url);
      // console.log(response.data.name);
      // console.log(response.data.email);
      const userData = {
        avatar: response.data.avatar_url, 
        realName: response.data.name, 
        email: response.data.email
      };
      // console.log(userData)
      cb(userData);
    });
  }
};

module.exports = api;
