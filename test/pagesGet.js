const config = require('./config.js');
const crowi = require('../lib/crowi.js');

const client = new crowi({
  baseUrl : config.baseURL,
  token : config.token,
});

const test = async () => {
  //path
  await client.api('pages.get', {path : '/user/to-hutohu/Apitest'}).
    then(data => console.log(data)).
    catch(data => console.log(data));
  client.api('pages.get', {path : '/user/to-hutohu/Apitest'}, (err, body) => {
    console.log(err);
    console.log(body);
  });

  //ID revisionの指定も可能
};

test();



