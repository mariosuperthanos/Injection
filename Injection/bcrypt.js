const bcrypt = require('bcrypt');
const password = 'parola123';
const saltRounds = 10;

bcrypt.hash(password, saltRounds, function(err, hash) {
  if (err) {
    console.error(err);
  } else {
    console.log(hash);
  }
});

bcrypt.compare('parola123', '$2b$10$M.ToA5kTNWvjUn6qPllQr.A5o47YprMQJcaprfD8I3UWbUXBYc442', function(err, res) {
  console.log(res);
});