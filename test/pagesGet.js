const token = require('./token.js');
const crowi = require('../lib/crowi.js');

const client = new crowi({
  baseUrl : 'http://demo.crowi.wiki',
  token : token.token,
});

const test = async () => {
  //path
  client.api('pages.get', {path : '/testtest'}).
    then(data => console.log(data)).
    catch(data => console.log(data));
  client.api('pages.get', {path : '/testtest'}, (err, body) => {
    console.log(err);
    console.log(body);
  });

  //ID revisionの指定も可能
};

test();



