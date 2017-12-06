const config = require('./config.js');
const crowi = require('../lib/crowi.js');

const client = new crowi({
  baseUrl : config.baseURL,
  token : config.token,
});

const test = async () => {
  await client.api('users.list', {}).
    then(data => console.log(data)).
    catch(data => console.log(data));
  client.api('users.list', {}, (err, body) => {
    console.log(err);
    console.log(body);
  });
};

test();
