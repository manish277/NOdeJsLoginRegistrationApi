var config = {
 
  URL: "http://127.0.0.1",
  API_PATH: "/api",
  PORT: process.env.PORT || 3000,
  DB: {
    //MongoDB configuration
    HOST: "localhost",
    PORT: "27017",
    DATABASE: "testDb"
  },
  
  getDBString: function() {
    return (
      "mongodb://" + this.DB.HOST + ":" + this.DB.PORT + "/" + this.DB.DATABASE
    );
  },

  getHTTPUrl: function() {
    return "http://" + this.URL + ":" + this.PORT;
  }
};
module.exports = config;
