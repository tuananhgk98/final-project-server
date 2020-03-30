const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://coderx:popacdmc@cluster0-8gqhf.azure.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true 
}).then(() => {
  console.log("Successfully connected to the database");    
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});

module.exports = mongoose;