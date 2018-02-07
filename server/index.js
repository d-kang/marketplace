'use strict';
const mongoose = require('mongoose');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: 'variables.env' });
}

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (error) => {
  console.error('mongooes connection error', error);
});

require('./models/Item');
const app = require('./app');
app.set('port', process.env.PORT || 1337);

const PORT = app.get('port');
app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
