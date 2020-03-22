import axios from "axios";

export default {
  // Gets random users, found this in an extensive web search, handy.
  getUsers: function() {

    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  }
};
