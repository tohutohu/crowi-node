const token = require('./token.js');
const crowi = require('../lib/crowi.js');

const client = new crowi({
  baseUrl : 'http://demo.crowi.wiki',
  token : token.token,
});

const test = async () => {
  //path
  client.api('pages.create', {path : '/testtest/Apitest', body: '# apiからページを作るテストです'}).
    then(data => console.log(data)).
    catch(data => console.log(data));
};

test();



