'use strict';
const app = require('./app');

app.set('port', process.env.PORT || 1337);

const PORT = app.get('port');
app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
