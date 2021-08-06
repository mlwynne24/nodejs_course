var configValues = require('./config');

module.exports = {

  getDbConnectionString: function() {

    return 'mongodb+srv://' + configValues.uname + ':' + configValues.pword + '@cluster0.bngor.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

  }

}

// mongodb+srv://morg:<password>@cluster0.bngor.mongodb.net/myFirstDatabase?retryWrites=true&w=majority