const token = require('./token.js');
const crowi = require('../lib/crowi.js');

const client = new crowi({
  baseUrl : 'http://demo.crowi.wiki',
  token : token.token,
});

const test = async () => {
  client.api('users.list', {}).
    then(data => console.log(data)).
    catch(data => console.log(data));
  client.api('users.list', {}, (err, body) => {
    console.log(err);
    console.log(body);
  });
};

test();
