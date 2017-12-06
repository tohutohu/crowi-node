const config = require('./config.js');
const crowi = require('../lib/crowi.js');

const client = new crowi({
  baseUrl : config.baseURL,
  token : config.token,
});

const test = async () => {
  //path
  const page = await client.api('pages.get', {path : '/testtest/test'});
  client.api('attachments.list', {page_id : page.id}).
    then(data => console.log(data)).
    catch(data => console.log(data));
  client.api('attachments.list', {page_id : page.id}, (err, body) => {
    console.log(err);
    console.log(body);
  });
};

test();



