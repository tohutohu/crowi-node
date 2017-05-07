const token = require('./token.js');
const crowi = require('../lib/crowi.js');

const client = new crowi({
  baseUrl : 'http://demo.crowi.wiki',
  token : token.token,
});

const test = async () => {
  //path
  client.api('pages.list', {path : '/'}).
    then(data => console.log(data)).
    catch(data => console.log(data));
  client.api('pages.list', {path : '/'}, (err, body) => {
    console.log(err);
    console.log(body);
  });

  //user
  client.api('pages.list', {user : 'to-hutohu'}).
    then(data => console.log(data)).
    catch(data => console.log(data));
  client.api('pages.list', {user : 'to-hutohu'}, (err, body) => {
    console.log(err);
    console.log(body);
  });

  //error
  client.api('pages.list', {}).
    then(data => console.log(data)).
    catch(data => console.log(data));
  client.api('pages.list', {}, (err, body) => {
    console.log(err);
    console.log(body);
  });
};

test();


