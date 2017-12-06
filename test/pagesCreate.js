const config = require('./config.js');
const crowi = require('../lib/crowi.js');

const client = new crowi({
  baseUrl : config.baseURL,
  token : config.token,
});

const test = async () => {
  //path
  client.api('pages.create', {path : '/user/to-hutohu/Apitest', body: '# apiからページを作るテストです'}).
    then(data => console.log(data)).
    catch(data => console.log(data));
};

test();



